import { pending } from './pending'

export const site = {
  name: 'Newport Homeopathy Clinic',
  origin: 'https://newporthomeopathy.com',
  locale: 'en-GB',
  phone: {
    display: '07904 622856',
    internationalDisplay: '+44 7904 622856',
    e164: '+447904622856',
    href: 'tel:+447904622856',
  },
  whatsapp: {
    href: 'https://wa.me/447904622856?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation',
    shortHref: 'https://wa.me/447904622856',
  },
  email: pending.email,
  address: {
    streetAddress: '75 Forton Road',
    addressLocality: 'Newport',
    addressRegion: 'Shropshire',
    postalCode: 'TF10 8BU',
    addressCountry: 'GB',
    display: '75 Forton Road, Newport, Shropshire TF10 8BU',
  },
  practitioner: {
    name: 'Kavita Batchu',
    title: pending.approvedPractitionerTitle,
    biography: pending.practitionerBiography,
    professionalMembership: pending.professionalMembership,
  },
  fees: pending.fees,
  openingHours: pending.openingHours,
  paymentMethods: pending.paymentMethods,
  onlineConsultationFormat: pending.onlineConsultationFormat,
  faqs: pending.homepageFaqs,
  areasServed: ['Newport, Shropshire', 'Telford', 'Shropshire', 'United Kingdom'],
  socialProfiles: pending.socialProfiles,
  googleBusinessProfile: pending.googleBusinessProfile,
  mapCoordinates: pending.mapCoordinates,
  photos: pending.photos,
  logoSource: pending.logoSource,
  parkingDetails: pending.parkingDetails,
  stepFreeAccess: pending.stepFreeAccess,
  booking: {
    tool: pending.bookingTool,
    inbox: pending.bookingInbox,
  },
  terms: {
    cancellationPolicy: pending.cancellationPolicy,
    distanceBookingTerms: pending.distanceBookingTerms,
  },
  privacy: {
    icoFeePaid: pending.icoFeePaid,
    dataController: pending.dataController,
  },
  approvals: {
    homepageCopy: pending.homepageCopyApproved,
    emergencySignposting: pending.emergencySignpostingApproved,
  },
  developerCredit: pending.developerCredit,
} as const
