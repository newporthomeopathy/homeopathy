export type FeeSchedule = {
  initial: {
    amountGBP: number
    consultationMinutes: {
      minimum: number
      maximum: number
    }
    bookingSlotMinutes: number
  }
  followUp: {
    amountGBP: number
    slotMinutes: number
    intervalWeeks: {
      minimum: number
      maximum: number
    }
  }
}

export type OpeningHours = {
  days: string[]
  opens: string
  closes: string
}

export type FrequentlyAskedQuestion = {
  question: string
  answer: string
}

export type PendingClientInputs = {
  email: string | null
  bookingInbox: string | null
  bookingTool: string | null
  preferredHost: 'apex' | 'www' | null
  approvedPractitionerTitle: string | null
  practitionerQualification: string | null
  practitionerBiography: string | null
  professionalMembership: {
    bodyName: string
    registerUrl: string
  } | null
  fees: FeeSchedule | null
  openingHours: OpeningHours | null
  paymentMethods: string[] | null
  onlineConsultationFormat: string | null
  homepageFaqs: FrequentlyAskedQuestion[] | null
  socialProfiles: {
    facebook: string
    instagram: string
  } | null
  googleBusinessProfile: {
    url: string
    cid: string
  } | null
  mapCoordinates: {
    latitude: number
    longitude: number
  } | null
  photos: {
    hero: string
    practitioner: string
    clinic: string
    openGraph: string
  } | null
  favicons: {
    ico: string
    svg: string
    appleTouchIcon: string
    manifest: string
  } | null
  logoSource: string | null
  parkingDetails: string | null
  stepFreeAccess: boolean | null
  developerCredit: string | null
  cancellationPolicy: string | null
  distanceBookingTerms: string | null
  icoFeePaid: boolean | null
  dataController: string | null
  homepageCopyApproved: boolean | null
  emergencySignpostingApproved: boolean | null
}

export const pending: PendingClientInputs = {
  email: null,
  bookingInbox: null,
  bookingTool: null,
  preferredHost: null,
  approvedPractitionerTitle: null,
  practitionerQualification: null,
  practitionerBiography: null,
  professionalMembership: null,
  fees: null,
  openingHours: null,
  paymentMethods: null,
  onlineConsultationFormat: null,
  homepageFaqs: null,
  socialProfiles: null,
  googleBusinessProfile: null,
  mapCoordinates: null,
  photos: null,
  favicons: null,
  logoSource: null,
  parkingDetails: null,
  stepFreeAccess: null,
  developerCredit: null,
  cancellationPolicy: null,
  distanceBookingTerms: null,
  icoFeePaid: null,
  dataController: null,
  homepageCopyApproved: null,
  emergencySignpostingApproved: null,
}
