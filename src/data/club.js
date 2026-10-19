// Practical information verified against the existing site and the UKA directory.
// See docs/website-modernisation.md for sources and unresolved age eligibility.
export const club = {
  name: 'Leicester Aikikai',
  established: 'May 2013',
  day: 'Fridays',
  hours: '7:00pm – 9:00pm',
  start: '19:00',
  end: '21:00',
  venue: 'Aylestone Leisure Centre',
  street: '2 Knighton Lane East',
  city: 'Leicester',
  postcode: 'LE2 6LU',
  email: 'leicester.aikikai@gmail.com',
  directions: 'https://www.google.com/maps/search/?api=1&query=Aylestone+Leisure+Centre+2+Knighton+Lane+East+Leicester+LE2+6LU',
  venueUrl: 'https://www.leicester.gov.uk/leisure-and-culture/sport-and-leisure/sports-and-leisure-centres/aylestone-leisure-centre/',
  membershipUrl: 'https://ukaikikai.org.uk/membership/',
  guestFee: 8,
  ageGuidance: 'Children aged 12 and under may train only if their parent is also training. Please contact the instructor before bringing a child to confirm age eligibility and availability.',
  clothing: 'Wear loose-fitting exercise clothes that cover your knees. Avoid shorts, as practice includes kneeling.',
  instructor: {
    name: 'Antonios Pavlakis',
    profile: '/instructors/antonis-pavlakis',
    qualification: '4th Dan · Fukushidoin',
    image: '/img/leicester-aikikai-antonios-pavlakis-2016.jpg'
  },
  fees: [
    { label: 'Adult (waged)', monthly: 25, annual: 35 },
    { label: 'Adult (concession)', monthly: 20, annual: 27 },
    { label: 'Under 18', monthly: 15, annual: 20 }
  ],
  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/LeicesterAikikai' },
    { label: 'Instagram', url: 'https://www.instagram.com/leicesteraikikai/' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@leicesteraikikai' },
    { label: 'Twitter', url: 'https://twitter.com/leicesterdojo' }
  ]
}

export const enquiryUrl = `mailto:${club.email}?subject=${encodeURIComponent('First aikido class enquiry')}`

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Start Aikido', path: '/beginners' },
  { label: 'Classes & Prices', path: '/classes' },
  { label: 'About Us', path: '/about' },
  { label: 'Student Resources', path: '/resources' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' }
]

export const beginnerFaqs = [
  { question: 'Do I need previous martial arts experience?', answer: 'No. Complete beginners are welcome, as are people returning to training. You can start with the fundamentals.' },
  { question: 'What should I wear?', answer: club.clothing },
  { question: 'Do I need to be physically fit?', answer: 'You do not need to reach a particular level of fitness before getting in touch. We welcome different levels of fitness and experience. Talk to the instructor about your needs before taking part.' },
  { question: 'Is there a minimum age?', answer: club.ageGuidance },
  { question: 'What happens during my first class?', answer: 'Meet the instructor and let them know you are new. Aikido practice includes partner movement, throws and learning how to fall and roll. The instructor can explain how you will begin; the exact lesson content varies.' },
  { question: 'How much does training cost?', answer: `Your first introductory lesson is free. Monthly training is ${club.fees.map(fee => `£${fee.monthly} for ${fee.label.toLowerCase()}`).join(', ')}. Separate annual UK Aikikai membership fees apply if you continue.` },
  { question: 'Do I need to book in advance?', answer: 'The club invites newcomers to come along on a Friday; advance booking is not required for the introductory class. You are welcome to email first with questions. Please enquire before bringing a child.' }
]
