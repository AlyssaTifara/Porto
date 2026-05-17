export const projects = {
  m111: {
    title: 'M111 Ngalam Folding Bike – Event Analytics Dashboard',
    overview:
      'Dashboard operasional untuk memantau distribusi peserta dan KPI event melalui konsolidasi data registrasi dari tiga sumber yang formatnya tidak konsisten.',
    tools: ['Power BI', 'Power Query', 'Excel'],
    problem:
      'Data registrasi peserta tersebar di tiga sumber, sehingga tim sulit mendapatkan gambaran operasional yang konsisten selama event berlangsung.',
    dataTools: {
      source: 'Data registrasi peserta event M111 Ngalam Folding Bike (500+ catatan, 3 sumber operasional)',
      tools: 'Power BI, Power Query, Microsoft Excel',
      variables: 'Distribusi peserta, status registrasi, kupon subsidi, KPI operasional event'
    },
    insights: [
      'Standarisasi data membantu menghasilkan dataset terpadu yang lebih siap dipakai untuk pelaporan KPI.',
      'Kolom kalkulasi turunan memudahkan pembacaan metrik tanpa mengubah data sumber asli.',
      'Dashboard memudahkan tim operasional memantau distribusi peserta dengan lebih cepat.'
    ],
    recommendation: {
      actions: 'Otomasi refresh data dan hubungkan ke sistem registrasi agar input manual berkurang.',
      impact: 'Pengambilan keputusan operasional menjadi lebih cepat dan rekonsiliasi data lebih akurat.'
    },
    reflection: {
      limitations: 'Data masih bersifat satu event dan belum berjalan dengan refresh otomatis berkala.',
      learned: 'Transformasi data yang terdokumentasi membantu audit dan reusabilitas proses.',
      future: 'Perlu pipeline ETL otomatis untuk event berikutnya.'
    },
    image: {
      src: '',
      alt: 'M111 Event analytics dashboard'
    },
    dashboardGallery: {
      title: 'Dashboard Preview',
      items: [
        {
          src: 'assets/documents/projects/M111/dashboard-1.png',
          width: 1568,
          height: 1003,
          alt: 'M111 participant distribution dashboard preview'
        },
        {
          src: 'assets/documents/projects/M111/light version (2).png',
          width: 1672,
          height: 941,
          alt: 'M111 operational KPI dashboard preview'
        }
      ]
    },
    links: { report: '' }
  },
  'airline-pricing-analysis': {
    title: 'Airline Price Analysis – Market Entry Strategy',
    overview:
      'Analisis harga tiket untuk membaca pola pricing, segmentasi maskapai, dan sinyal musiman sebagai dasar strategi masuk pasar.',
    tools: ['Python', 'Pandas', 'Power BI', 'Excel'],
    problem:
      'Tim membutuhkan gambaran yang lebih jelas tentang pola harga dan segmentasi pasar agar strategi pricing tidak hanya berbasis asumsi.',
    dataTools: {
      source: 'Data harga tiket penerbangan domestik India',
      tools: 'Power BI, Python (Pandas), Excel',
      variables: 'Harga tiket, maskapai, rute, kelas penerbangan, waktu'
    },
    insights: [
      'Perbedaan harga antara segmen low-cost dan full-service terlihat cukup konsisten.',
      'Pola musiman dan rute bisnis utama memengaruhi harga secara signifikan.',
      'Segmentasi pasar membantu menyusun arah pricing yang lebih relevan.'
    ],
    recommendation: {
      actions: 'Gunakan insight musiman dan rute untuk mendukung pricing yang lebih adaptif.',
      impact: 'Keputusan market entry dan pricing menjadi lebih terarah berbasis data.'
    },
    reflection: {
      limitations: 'Analisis masih berbasis data historis tanpa komponen biaya operasional.',
      learned: 'EDA dan visualisasi mempermudah pembacaan peluang bisnis.',
      future: 'Analisis dapat dilanjutkan ke model prediksi harga dan rute internasional.'
    },
    image: {
      src: 'assets/images/projects/kecbis/dashboard_2.jpg',
      alt: 'Power BI airline pricing dashboard'
    },
    links: {
      report: 'assets/documents/projects/kecbis/UAS Kecbis_Kel 7.pdf'
    }
  },
  atm: {
    title: 'SiAkre – Accreditation Workflow System',
    overview:
      'Sistem berbasis web untuk merapikan alur akreditasi, mengonsolidasikan data, dan memperjelas proses validasi dokumen antar peran.',
    tools: ['Laravel 10', 'Bootstrap 5', 'MySQL'],
    problem:
      'Proses akreditasi masih manual, data tersebar, dan validasi berjenjang tidak mudah dipantau sehingga penyusunan borang menjadi lambat.',
    dataTools: {
      source: 'Data dosen, kriteria akreditasi (1–9), dokumen pendukung, status validasi, catatan revisi',
      tools: 'MySQL, Laravel 10, PHP, Bootstrap',
      variables: 'Role pengguna, tingkat validasi, komentar revisi, lampiran, progres borang'
    },
    insights: [
      'Validasi bertingkat membantu menjaga konsistensi data akreditasi.',
      'Peran yang jelas memperlancar alur persetujuan antar pihak.',
      'Otomasi ekspor borang mengurangi kesalahan manual dan mempercepat penyusunan dokumen.'
    ],
    recommendation: {
      actions: 'Tambahkan dashboard progres dan notifikasi agar tracking lebih mudah.',
      impact: 'Lead time akreditasi turun dan proses monitoring menjadi lebih jelas.'
    },
    reflection: {
      limitations: 'Integrasi eksternal terbatas dan tampilan mobile belum sepenuhnya optimal.',
      learned: 'Pemetaan alur bisnis dan dokumentasi sistem penting untuk aplikasi multi-role.',
      future: 'Sistem dapat dikembangkan dengan analitik progres dan integrasi ke sistem akademik.'
    },
    image: {
      src: 'assets/images/projects/akre/1752500344214.jpg',
      alt: 'Dashboard sistem informasi akreditasi'
    },
    links: {
      github: 'https://github.com/alfinafriansyah/PBL_Akreditasi',
      report: 'assets/documents/projects/akre/Kelompok_4__SIB_2C_Akreditasi.pdf'
    }
  },
  retention: {
    title: 'Studify Mobile – Class Scheduler System',
    overview:
      'Aplikasi penjadwalan akademik untuk membantu pengguna melihat jadwal dan pembaruan penting dalam satu sumber informasi yang lebih rapi.',
    tools: ['Flutter', 'Laravel', 'MySQL'],
    problem:
      'Koordinasi jadwal melalui chat membuat informasi mudah tercecer dan perubahan jadwal sering terlewat.',
    dataTools: {
      source: 'Data pengguna, kelas, jadwal kuliah, notifikasi',
      tools: 'Laravel REST API, MySQL, Flutter, Firebase FCM',
      variables: 'Role pengguna, jadwal, waktu notifikasi, status kelas'
    },
    insights: [
      'Satu sumber informasi mengurangi miskomunikasi jadwal dan duplikasi pesan.',
      'Notifikasi otomatis membantu pengguna merespons perubahan jadwal lebih cepat.',
      'Dokumentasi use case dan flow membantu pengembangan fitur tetap terarah.'
    ],
    recommendation: {
      actions: 'Sinkronkan kalender dan perkuat alur umpan balik pengguna.',
      impact: 'Koordinasi akademik menjadi lebih rapi dan mudah dipantau.'
    },
    reflection: {
      limitations: 'Aplikasi masih berdiri sebagai solusi mandiri dan belum terhubung ke sistem kampus.',
      learned: 'Dokumentasi sistem seperti use case, flow, dan ERD sangat membantu kolaborasi.',
      future: 'Pengembangan lanjutan bisa mencakup tugas, absensi, dan integrasi sistem kampus.'
    },
    image: {
      src: 'assets/images/projects/studify/photo_2025-12-24_22-04-23.jpg',
      alt: 'Studify Mobile overview screen'
    },
    mobileShowcase: {
      screens: [
        {
          src: 'assets/images/projects/studify/mobile-1.png',
          alt: 'Studify Mobile home screen'
        },
        {
          src: 'assets/images/projects/studify/mobile-2.png',
          alt: 'Studify Mobile study session screen'
        },
        {
          src: 'assets/images/projects/studify/mobile-3.png',
          alt: 'Studify Mobile progress dashboard screen'
        }
      ]
    },
    links: {
      github: 'https://github.com/zidnafaz/studify_frontend',
      report: 'assets/documents/projects/studify/Manual Book Mobile PBL_Kel 7.pdf'
    }
  }
};

export function getProject(projectId) {
  return projects[projectId] || null;
}
