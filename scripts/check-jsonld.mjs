import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const placeholderPattern =
  /CONFIRMED_PROFESSIONAL_BODY|PROFESSIONAL_REGISTER_LISTING_URL|GOOGLE_BUSINESS_PROFILE_URL|FACEBOOK_URL|INSTAGRAM_URL|GBP_CID_HERE|BODY_URL|PLACEHOLDER/i
const prohibitedTypes = new Set(['MedicalBusiness', 'MedicalClinic', 'Physician'])

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) return findHtmlFiles(path)
      return entry.isFile() && entry.name.endsWith('.html') ? [path] : []
    }),
  )

  return files.flat()
}

function findSchemaIssues(value, path = '$') {
  if (typeof value === 'string') {
    return placeholderPattern.test(value) ? [`${path}: placeholder value`] : []
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => findSchemaIssues(item, `${path}[${index}]`))
  }
  if (!value || typeof value !== 'object') return []

  const issues = []
  for (const [key, item] of Object.entries(value)) {
    if (key === 'medicalSpecialty') issues.push(`${path}.${key}: prohibited property`)
    if (key === '@type' && typeof item === 'string' && prohibitedTypes.has(item)) {
      issues.push(`${path}.${key}: prohibited type ${item}`)
    }
    issues.push(...findSchemaIssues(item, `${path}.${key}`))
  }
  return issues
}

const htmlFiles = await findHtmlFiles(distDirectory)
if (htmlFiles.length === 0) throw new Error('No built HTML files found in dist/.')

let blockCount = 0
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8')
  const blocks = [
    ...html.matchAll(
      /<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ]

  for (const [index, block] of blocks.entries()) {
    let data
    try {
      data = JSON.parse(block[1])
    } catch (error) {
      throw new Error(`Invalid JSON-LD in ${file}, block ${index + 1}: ${error.message}`)
    }
    if (data['@context'] !== 'https://schema.org') {
      throw new Error(`Unexpected JSON-LD context in ${file}, block ${index + 1}.`)
    }

    const issues = findSchemaIssues(data)
    if (issues.length > 0) {
      throw new Error(`Invalid JSON-LD in ${file}, block ${index + 1}: ${issues.join('; ')}`)
    }
    blockCount += 1
  }
}

if (blockCount === 0) throw new Error('No JSON-LD blocks found in built HTML.')
console.log(
  `JSON-LD validation passed: ${blockCount} block(s) across ${htmlFiles.length} HTML file(s).`,
)
