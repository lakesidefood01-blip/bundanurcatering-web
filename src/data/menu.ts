export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'nasi-kotak',
    name: 'Eksekutif Nasi Kotak',
    price: 23000,
    description: 'Bosan dengan nasi kotak hambar? Nikmati nasi pulen dengan ayam rempah, mie gurih, dan sambal goreng ati yang meledak di mulut. Pilihan tepat untuk rapat Kantor.',
    category: 'Nasi Kotak',
    image: 'https://bundanurcatering.com/img/gallery/crop/32.jpg',
    featured: true
  },
  {
    id: 'ayam-bakar-madu',
    name: 'Ayam Bakar Madu Spesial',
    price: 70000,
    description: 'Ayam utuh pilihan yang diungkep bumbu rahasia lalu dibakar dengan olesan madu murni. Manis, gurih, dan tekstur daging lembut hingga ke tulang.',
    category: 'Spesial',
    image: 'https://bundanurcatering.com/img/gallery/2-card.jpg',
    featured: true
  },
  {
    id: 'paket-aqiqah',
    name: 'Aqiqah Berkah & Praktis',
    price: 56000,
    description: 'Rayakan kehadiran si kecil tanpa repot. Gulai kambing gurih tanpa bau prengus dan sate empuk yang diolah secara syar\'i, bersih, dan higienis.',
    category: 'Aqiqah',
    image: 'https://bundanurcatering.com/img/gallery/22-card.jpg',
    featured: true
  },
  {
    id: 'tumpeng-besar',
    name: 'Tumpeng Megah Nusantara',
    price: 1600000,
    description: 'Simbol syukur yang mewah untuk momen spesial Anda. Nasi kuning wangi dengan 7 lauk lengkap, dihias cantik untuk estetika acara Anda.',
    category: 'Tumpeng',
    image: 'https://bundanurcatering.com/img/gallery/crop/33.jpg'
  },
  {
    id: 'lontong-cap-gomeh',
    name: 'Hantaran Lontong Cap Gomeh',
    price: 400000,
    description: 'Perpaduan lembutnya lontong dengan kuah opor kental, sayur lodeh segar, dan bubuk kedelai gurih. Pilihan tepat untuk hantaran kerabat.',
    category: 'Hantaran',
    image: 'https://bundanurcatering.com/img/gallery/crop/34.jpg'
  },
  {
    id: 'sate-ayam',
    name: 'Pesta Sate Ayam Pilihan',
    price: 350000,
    description: '20 porsi sate ayam potongan daging tebal, disiram bumbu kacang kental yang legit, disajikan bersama lontong daun yang harum.',
    category: 'Hantaran',
    image: 'https://bundanurcatering.com/img/gallery/crop/35.jpg'
  }
];
