import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  Clock, 
  ShieldCheck,
  UtensilsCrossed,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { menuItems, MenuItem } from '../data/menu';
import { galleryItems, GalleryItem } from '../data/gallery';
import { clients, Client } from '../data/clients';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Form State
  const [needs, setNeeds] = useState('Syukuran / Nasi Kotak');
  const [portion, setPortion] = useState('');
  const [date, setDate] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const faqs = [
    {
      q: "Apakah semua menu Bunda Nur Catering halal?",
      a: "Ya, 100% halal. Kami sangat menjaga kebersihan dan kualitas bahan yang digunakan. Proses pengolahan kami mengikuti standar kebersihan yang ketat."
    },
    {
      q: "Berapa minimum pemesanan untuk nasi kotak?",
      a: "Minimum pemesanan untuk Nasi Kotak adalah 20 porsi. Untuk hantaran seperti Lontong Cap Gomeh atau Sate, tersedia paket mulai dari 10-20 porsi."
    },
    {
      q: "Apakah melayani pengiriman ke luar kota?",
      a: "Saat ini kami fokus melayani area Sidoarjo, Surabaya, dan sekitarnya (Gresik/Mojokerto dengan min. order tertentu) untuk memastikan hidangan sampai dalam keadaan segar."
    },
    {
      q: "Berapa hari sebelum acara pemesanan harus dilakukan?",
      a: "Pemesanan sebaiknya dilakukan minimal H-3 untuk Nasi Kotak dan H-7 untuk momen besar seperti Aqiqah atau Tumpeng Megah agar kami bisa menyiapkan bahan terbaik."
    },
    {
      q: "Apakah bisa melakukan kustomisasi menu (request lauk)?",
      a: "Sangat bisa! Anda dapat berkonsultasi langsung via WhatsApp untuk menyesuaikan lauk pauk sesuai dengan selera atau budget acara Anda."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWAHelp = (message: string) => {
    const url = `https://wa.me/6285819991589?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleHeroFormSubmit = () => {
    const text = `Halo Bunda Nur Catering, saya ingin konsultasi menu:\n\nKebutuhan: ${needs}\nPorsi: ${portion || '-'}\nTanggal: ${date || '-'}\n\nMohon informasi selanjutnya. Terima kasih!`;
    handleWAHelp(text);
  };

  return (
    <div className="min-h-screen bg-brand-accent font-sans text-brand-secondary overflow-x-hidden selection:bg-brand-primary/20">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-6 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md border-brand-border" : "bg-transparent border-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img 
              src="https://bundanurcatering.com/img/logo.png" 
              alt="Bunda Nur Catering Logo, Nasi Kotak Sidoarjo, Nasi Kotak Surabaya" 
              className="h-12 md:h-16 w-auto group-hover:scale-105 transition-transform duration-300" 
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-gray-500">
            <a href="#home" className="hover:text-brand-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all">Home</a>
            <a href="#about" className="hover:text-brand-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all">Tentang</a>
            <a href="#menu" className="hover:text-brand-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all">Menu</a>
            <a href="#gallery" className="hover:text-brand-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all">Gallery</a>
            <a href="#clients" className="hover:text-brand-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all">Client</a>
            <a href="#faq" className="hover:text-brand-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-primary hover:after:w-full after:transition-all">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="bg-brand-secondary text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-brand-primary transition-all hidden sm:block"
              onClick={() => handleWAHelp('Halo Bunda Nur Catering, saya ingin memesan menu.')}
            >
              Pesan Sekarang
            </button>
            <button 
              className="md:hidden p-2 text-brand-secondary"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white p-6 md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <img 
                  src="https://bundanurcatering.com/img/logo.png" 
                  alt="Bunda Nur Catering Logo, Nasi Kotak Sidoarjo, Nasi Kotak Surabaya" 
                  className="h-10 w-auto" 
                />
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-brand-secondary"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-2xl font-serif font-bold">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Tentang Kami</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Daftar Menu</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Gallery</a>
              <a href="#clients" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Client</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">FAQ</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-primary transition-colors">Kontak</a>
            </div>

            <div className="mt-auto pt-8 border-t border-brand-border">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Informasi Kontak</p>
              <div className="space-y-4">
                <a href="https://wa.me/6285819991589" className="flex items-center gap-4 text-sm">
                  <Phone size={18} className="text-brand-primary" />
                  +62 858-1999-1589
                </a>
                <div className="flex items-start gap-4 text-sm text-gray-500">
                  <MapPin size={18} className="text-brand-primary shrink-0" />
                  <span>Jl. Sumatra no 24 Binangun Indah Buduran, Sidoarjo</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex flex-col pt-32 overflow-hidden border-b border-brand-border">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-0 flex-1">
          {/* Left Side */}
          <div className="md:col-span-7 flex flex-col justify-center py-8 md:py-12 md:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest">
                <span className="w-8 h-[1px] bg-brand-primary"></span> Sejak 2011
              </div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-6 md:mb-8 text-brand-secondary">
                Hadirkan <span className="italic">Kebahagiaan</span> di Setiap <span className="text-brand-primary">Jamuan</span>
              </h1>
              <p className="text-base md:text-lg text-gray-500 max-w-lg leading-relaxed mb-10 font-light">
                Bingung cari hidangan yang pas untuk momen spesial? Bunda Nur hadir dengan cita rasa bintang lima yang bisa Anda pesan cukup dari rumah. Halal, higienis, dan pasti memikat selera.
              </p>
              
              {/* Quick Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { num: '01', title: 'Nasi Box', desc: 'Mulai Rp 23rb' },
                  { num: '02', title: 'Aqiqah', desc: 'Hemat & Halal' },
                  { num: '03', title: 'Tumpeng', desc: 'Custom Menu' },
                ].map((item, i) => (
                  <a href="#menu" key={i} className="p-4 md:p-5 border border-brand-border bg-white hover:border-brand-primary cursor-pointer group transition-all flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                    <div className="text-brand-primary text-xs sm:mb-2 font-bold">{item.num}</div>
                    <div>
                      <div className="font-bold text-sm mb-0.5 md:mb-1">{item.title}</div>
                      <div className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest">{item.desc}</div>
                    </div>
                    <ArrowRight size={16} className="ml-auto sm:hidden text-brand-primary" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-5 relative mt-12 md:mt-0 flex flex-col">
            <div className="flex-1 bg-brand-border relative m-0 shadow-inner overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-0">
              <img 
                src="https://bundanurcatering.com/img/cover.jpg" 
                alt="Nasi Kotak Sidoarjo, Nasi Kotak Surabaya" 
                className="w-full h-full object-cover grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-brand-secondary/10" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:bottom-8 md:top-auto md:left-8 md:right-8 w-[90%] md:w-auto bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl border border-brand-border">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-6">Konsultasi Menu</div>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-2">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Pilih Kebutuhan</span>
                    <select 
                      value={needs}
                      onChange={(e) => setNeeds(e.target.value)}
                      className="w-full text-sm font-medium bg-transparent focus:outline-none"
                    >
                      <option>Syukuran / Nasi Kotak</option>
                      <option>Aqiqah</option>
                      <option>Acara Kantor</option>
                    </select>
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <div className="border-b border-gray-100 pb-2 flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Porsi</span>
                      <input 
                        type="number" 
                        placeholder="50" 
                        value={portion}
                        onChange={(e) => setPortion(e.target.value)}
                        className="w-full text-sm font-medium bg-transparent focus:outline-none" 
                      />
                    </div>
                    <div className="border-b border-gray-100 pb-2 flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Tanggal</span>
                      <input 
                        type="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full text-sm font-medium bg-transparent focus:outline-none" 
                      />
                    </div>
                  </div>
                  <button 
                    onClick={handleHeroFormSubmit}
                    className="w-full bg-brand-primary text-white py-4 font-bold text-xs uppercase tracking-widest mt-4 hover:bg-brand-secondary transition-all"
                  >
                    Dapatkan Penawaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid - Minimalism */}
      <section id="menu" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">Cita Rasa Eksklusif</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Kenikmatan Hidangan <br/>di Ujung Jari</h2>
            </div>
            <div className="text-right">
              <p className="text-gray-500 font-light max-w-xs ml-auto leading-relaxed">Kami mengurasi menu terbaik dengan bumbu rempah warisan untuk menjamin kepuasan lidah tamu undangan Anda.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-border">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className="group border-r border-b border-brand-border p-6 md:p-10 hover:bg-brand-accent transition-colors flex flex-col"
              >
                <div className="aspect-square mb-6 md:mb-8 overflow-hidden transition-all duration-500">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary mb-3 block">{item.category}</span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-4">{item.name}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 md:mb-8">{item.description}</p>
                </div>
                <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-brand-border/50">
                  <span className="text-lg font-bold">{formatPrice(item.price)}</span>
                  <button 
                    onClick={() => handleWAHelp(`Halo Bunda Nur, saya mau tanya/pesan menu: ${item.name}`)}
                    className="text-brand-secondary hover:text-brand-primary p-2 border border-brand-secondary hover:border-brand-primary rounded-full transition-all flex items-center gap-2 group/btn"
                    aria-label="Tanya via WhatsApp"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-bold ml-2 md:hidden">Pesan</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Trust */}
      <section id="about" className="py-20 md:py-32 bg-brand-accent border-y border-brand-border">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8 md:space-y-12">
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight uppercase">
              Bukan Sekadar <span className="italic font-normal">Catering</span> Biasa.
            </h2>
            <div className="space-y-6 md:space-y-8 font-light text-gray-600 leading-relaxed max-w-md text-base md:text-lg">
              <p>Berawal dari dapur rumahan di Sidoarjo pada tahun 2011, Bunda Nur mendedikasikan waktu untuk menyempurnakan setiap resep hidangan tradisional Indonesia.</p>
              <p>Kini kami hadir dengan sistem pemesanan modern untuk memastikan kelezatan menu kami dapat dinikmati semudah satu ketukan jari.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-brand-border pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold font-serif mb-1">100k+</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Produksi</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-serif mb-1">13</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Tahun</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-serif mb-1">100%</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Halal</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-[3/4] bg-brand-border overflow-hidden">
            <img 
              src="https://bundanurcatering.com/img/gallery/25.jpg" 
              alt="Nasi Kotak Sidoarjo, Nasi Kotak Surabaya" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[16px] md:border-[32px] border-brand-accent/50" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-brand-accent border-b border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">Visualisasi Cita Rasa</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Gallery Kami</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Terima kasih kepada para pelanggan yang telah memesan di Bunda Nur Catering. Kepuasan Anda adalah tujuan kami. 
              Menerima pesanan aneka nasi kotak, paket nasi kuning, paket tumpeng, nasi bakar, paket ayam bakar utuh, dll. 
              Untuk segala acara: makan siang, pesta ulang tahun, pesta pernikahan, pertemuan atau meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-brand-border"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.thumb} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h4 className="text-white font-serif font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/80 text-[10px] uppercase tracking-widest">{item.footer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-md">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">Kemitraan</span>
              <h2 className="font-serif text-4xl font-bold">Dipercaya Oleh Berbagai Instansi & Keluarga</h2>
            </div>
            <p className="text-gray-500 font-light max-w-xs md:text-right leading-relaxed">
              Sejak 2011, kami telah melayani ribuan pelanggan mulai dari perkantoran hingga acara keluarga di area Sidoarjo dan Surabaya.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {clients.map((client, idx) => (
              <motion.div 
                key={client.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center justify-center p-8 border border-brand-border hover:border-brand-primary transition-all group bg-brand-accent/30 rounded-xl"
              >
                <div className="h-16 w-full flex items-center justify-center mb-4 transition-all duration-500">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random&color=fff&size=128`;
                    }}
                  />
                </div>
                <span className="font-sans font-semibold text-center text-[10px] uppercase tracking-wider text-gray-500 group-hover:text-brand-secondary transition-colors">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-secondary/95 backdrop-blur-sm flex items-center justify-center p-6 lg:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              <div className="w-full bg-brand-border aspect-video lg:aspect-[16/9] overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-serif text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/60 text-xs uppercase tracking-[0.3em]">{selectedImage.footer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">Bantuan</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-8">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-gray-500 font-light leading-relaxed">Punya pertanyaan lain? Jangan ragu untuk menghubungi tim kami melalui WhatsApp untuk konsultasi lebih lanjut.</p>
              
              <button 
                onClick={() => handleWAHelp('Halo Bunda Nur, saya punya pertanyaan mengenai catering.')}
                className="mt-8 flex items-center gap-3 text-brand-secondary font-bold text-xs uppercase tracking-widest group"
              >
                <span>Tanya via WhatsApp</span>
                <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                  <ArrowRight size={14} />
                </div>
              </button>
            </div>

            <div className="md:col-span-7 space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "border border-brand-border transition-all duration-300",
                    openFaq === index ? "bg-brand-accent border-brand-primary/20" : "bg-white"
                  )}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <span className="font-serif text-lg md:text-xl font-bold">{faq.q}</span>
                    <div className="shrink-0 ml-4">
                      {openFaq === index ? <Minus size={20} className="text-brand-primary" /> : <Plus size={20} className="text-gray-300" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 text-gray-500 font-light leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer & SEO Health */}
      <footer id="contact" className="bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-24 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <h3 className="font-serif text-3xl font-bold">Kontak Kami</h3>
            <div className="space-y-4 font-light text-gray-500">
              <p className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-primary mt-1" />
                Jl. Sumatra no 24 Binangun Indah Buduran, Sidoarjo
              </p>
              <p className="flex items-start gap-4">
                <Phone size={20} className="text-brand-primary mt-1" />
                +62 858-1999-1589
              </p>
              <div className="flex gap-6 mt-8">
                <Instagram size={20} className="hover:text-brand-primary cursor-pointer transition-colors" />
                <Facebook size={20} className="hover:text-brand-primary cursor-pointer transition-colors" />
                <MessageCircle size={20} className="hover:text-brand-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8 flex flex-col justify-end">
            <div className="text-right space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Hubungi Langsung</span>
              <h4 className="text-3xl md:text-5xl font-serif font-bold hover:text-brand-primary transition-colors">
                <a href="https://wa.me/6285819991589">Tanya Paket via WhatsApp —</a>
              </h4>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border py-8 px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">© 2026 Bunda Nur Catering</p>
            <div className="flex gap-6">
              {['Instagram', 'WhatsApp', 'Facebook'].map(item => (
                <a key={item} href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-brand-primary">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      </div>
  );
}
