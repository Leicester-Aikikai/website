// /src/data/events.js

export const events = [
  {
    date: '21.11.2026',
    title: 'Joint Aikido Course with UKAikikai and British Birankai in November 2026',
    description: 'A joint aikido course bringing together instructors from UK Aikikai and British Birankai associations. Join us for a day of training with instructors Trevor Doxsey, Antonis Pavlakis, Michael Howson, and Paul Shepherd at Ren Shin Kan Dojo in Halesowen. All associations welcome.',
    type: 'course',
    id: 'event-2026-11-21',
    image: '/img/ukaikikai-british-birankai-joint-aikido-course-november-2026.jpeg',
    location: {
      name: 'Ren Shin Kan Dojo',
      address: '7 Peckingham Street, Halesowen, B63 3AW'
    },
    time: {
      start: '12:00',
      end: '17:00'
    },
    price: '£20 adults, £15 concessions',
    instructors: ['Trevor Doxsey', 'Antonis Pavlakis', 'Michael Howson', 'Paul Shepherd']
  },
  {
    date: '19.07.2026',
    title: 'Course with Stuart Lovering 6th dan shidoin from Tudor Grange dojo',
    description: 'On July 19th we\'ll be having an aikido course with guest instructor Stuart Lovering 6th dan shidoin, the Chief Instructor of Tudor Grange dojo, alongside Antonis Pavlakis. This course will consist of three classes and a session for yudansha mock gradings. Everyone is encouraged to take part at the mock gradings and take ukemi for all candidates.',
    type: 'course',
    id: 'event-2026-07-19',
    image: '/img/leicester-aikikai-july-19th-2026.jpg',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '12:30',
      end: '16:30'
    },
    price: 'Adults - £20, Concession - £15, Under 18\'s - £12',
    instructors: [
      { name: 'Antonis Pavlakis', profile: '/instructors/antonis-pavlakis' },
      { name: 'Stuart Lovering', profile: 'https://tudorgrangeaikido.com/home/' }
    ]
  },
  {
    date: '29.03.2026',
    title: 'Course with Neil Mould 6th Dan shidoin from Sotenjuku dojo',
    description: 'Aikido course at Aylestone Leisure Centre featuring guest instructor Neil Mould 6th Dan shidoin from Sotenjuku dojo, alongside Antonis Pavlakis sensei.',
    type: 'course',
    id: 'event-2026-03-29',
    image: '/img/Aikido-course-March-2026-leicester-aikikai.png',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '12:30',
      end: '16:30'
    },
    price: 'Adults - £15, Concession - £12, Under 18\'s - £8',
    instructors: [
      { name: 'Antonis Pavlakis', profile: '/instructors/antonis-pavlakis' },
      { name: 'Neil Mould', profile: "https://www.sotenjuku.uk/instructors" }
    ]
  },
  {
    date: '14.12.2025',
    title: 'Xmas 2025 course with Melton Byakko-Kan Aikido',
    description: 'A joint aikido course at the Melton Byakko-Kan Aikido dojo featuring instructors Naoko Suzuki, Sergio Cardoso, Antonis Pavlakis, and Terry Mickowski.',
    type: 'course',
    id: 'event-2025-12-14',
    image: '/img/Byakko-kan-joint-aikido-course-december-2025.jpg',
    location: {
      name: 'Jubilee Sports Centre',
      address: 'Jubilee Street, Melton Mowbray, Leicestershire, LE13 1ND'
    },
    time: {
      start: '10:30',
      end: '14:30'
    },
    price: '£10',
    instructors: ['Naoko Suzuki', 'Sergio Cardoso', 'Antonis Pavlakis', 'Terry Mickowski']
  },
  {
    date: '28.11.2025',
    title: 'Guest instructor Iain Cooper sensei',
    description: 'Join us for an aikido class with guest instructor Iain Cooper sensei 4th dan Fukushidoin, alongside our instructor Antonis Pavlakis sensei.',
    type: 'course',
    id: 'event-2025-11-28',
    image: '/img/end-of-class-leicester-aikikai-and-guests.jpeg',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '19:00',
      end: '21:00'
    },
    instructors: [
      { name: 'Iain Cooper', profile: null },
      { name: 'Antonis Pavlakis', profile: '/instructors/antonis-pavlakis' }
    ]
  },
  {
    date: '14.11.2025',
    title: 'Guest instructor Tim Sullivan sensei from Warwick University',
    description: 'Join us for an aikido class with guest instructor Tim Sullivan sensei from Warwick University, alongside our instructor Antonis Pavlakis sensei.',
    type: 'course',
    id: 'event-2025-11-14',
    image: '/img/end-of-class-leicester-aikikai-and-guests.jpeg',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '19:00',
      end: '21:00'
    },
    instructors: [
      { name: 'Antonis Pavlakis', profile: '/instructors/antonis-pavlakis' },
      { name: 'Tim Sullivan', profile: 'https://warwickaikido.com/sullivan-sensei/' }
    ]
  },
  {
    date: '22.11.2025',
    title: 'Aikido Course at Fight Ministry Hull',
    description: 'Aikido course at Fight Ministry in Hull with instructors Philip Smith shihan and Antonis Pavlakis sensei.',
    type: 'course',
    id: 'event-2025-11-22',
    image: '/img/UKA-Aikido-course-Fight-Ministry-Hull-November-22-2025.jpeg',
    location: {
      name: 'Fight Ministry',
      address: 'Salisbury Hall, 1 Park Rd, Hull, HU3 1TD'
    },
    time: {
      start: '14:00',
      end: '17:00'
    },
    instructors: ['Philip Smith', 'Antonis Pavlakis']
  },
  {
    date: '10.12.2023',
    title: 'Joint course with Melton Byakko-Kan Aikido',
    description: 'A joint aikido course at the Melton Byakko-Kan Aikido dojo with guest instructors including Naoko Suzuki sensei, Terry Mickowski sensei, Andy Thompson sensei, and Antonis Pavlakis sensei.',
    type: 'course',
    id: 'event-2023-12-10',
    image: '/img/Byakko-kan-joint-aikido-course-december-2023.jpg',
    location: {
      name: 'Jubilee Sports Centre',
      address: 'Jubilee Street, Melton Mowbray, Leicestershire, LE13 1ND'
    },
    time: {
      start: '11:00',
      end: '15:00'
    },
    price: '£20',
    instructors: ['Naoko Suzuki', 'Terry Mickowski', 'Andy Thompson', 'Antonis Pavlakis']
  },
  {
    date: '22.10.2023',
    title: 'Leicester Aikikai Dojo Course - October 2023',
    description: 'Dojo course with guest instructor Iain Cooper sensei 4th dan Fukushidoin at Aylestone Leisure Centre.',
    type: 'course',
    id: 'event-2023-10-22',
    image: '/img/leicester-aikikai-dojo-course-October-2023.jpeg',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '13:00',
      end: '17:00'
    },
    price: '£15',
    instructors: ['Iain Cooper', 'Antonis Pavlakis']
  },
  {
    date: '15.09.2023',
    title: 'Aikido Beginner\'s Course 2023',
    description: 'Start aikido with a 3-month beginner\'s course. Learn co-ordination, self-improvement, body conditioning, ukemi (falling), self-defence and more.',
    type: 'course',
    id: 'event-2023-09-15',
    image: '/img/leicester-aikikai-bokken-shiko-dachi-circle-exercise.webp',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '19:00',
      end: '21:00'
    },
    price: '£60',
    instructors: ['Antonis Pavlakis']
  },
  {
    date: '11.06.2023',
    title: 'Dojo 10th year anniversary course',
    description: '10th year anniversary course with guest instructors Ian Grubb 6th dan, Terry Mickowski 4th dan, Iain Cooper 3rd dan, and Antonis Pavlakis 3rd dan.',
    type: 'course',
    id: 'event-2023-06-11',
    image: '/img/leicester-aikikai-10-years-anniversary-course-june-11-2023.JPG',
    location: {
      name: 'Aylestone Leisure Centre',
      address: '2 Knighton Lane East, Leicester, LE2 6LU'
    },
    time: {
      start: '13:00',
      end: '17:00'
    },
    price: '£15',
    instructors: ['Ian Grubb', 'Terry Mickowski', 'Iain Cooper', 'Antonis Pavlakis']
  }
];

