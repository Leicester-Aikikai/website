// Grade-specific weapons requirements supplied by the club, November 2026.
// The brochure generator combines these with the body art in Syllabus.vue.
export const gradingWeapons = {
  '6th-kyu': {
    bokken: [
      { title: 'Etiquette' },
      { title: 'Five basic postures of sword', items: [
        'Chudan No Kamae', 'Jodan No Kamae', 'Hasso No Kamae',
        'Waki-gamae No Kamae', 'Gedan No Kamae'
      ] },
      { title: 'Shiho-giri shomen uchi', instructor: 'Saito sensei' },
      { title: 'Happo-giri shomen uchi', instructor: 'Saito sensei' }
    ],
    jo: [
      { title: 'Etiquette' },
      { title: 'Five basic postures of the Jo', items: [
        'Chudan Junte (pointing at partner)',
        'Chudan Gyakute (pointing at partner)',
        'Jodan No Kamae', 'Hasso No Kamae',
        'Junte and Gyakute (holding the Jo in posture vertically covering your front knee)'
      ] }
    ]
  },
  '5th-kyu': {
    bokken: [{ title: '7 Suburi', instructor: 'Saito sensei' }],
    jo: [
      { title: 'First 5 from 20 Jo Suburi', suburi: 5, instructor: 'Saito sensei' },
      { title: '9 count kata', instructor: 'Chiba sensei' }
    ]
  },
  '4th-kyu': {
    bokken: [{ title: '8 bokken suburi', instructor: 'Chiba sensei' }],
    jo: [
      { title: 'First 10 from 20 Jo Suburi', suburi: 10, instructor: 'Saito sensei' },
      { title: '13 count kata', instructor: 'Saito sensei' }
    ]
  }
}
