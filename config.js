/* ====== UBAH DI SINI SAJA. Semua tampilan & balasan AI ikut berubah. ======
   Semua asset di bawah masih dummy (CDN). Ganti satu-satu dengan file milikmu. */
const img = (seed, w = 800, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const SND = (n) => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

window.CONFIG = {
  accent: "#0d9488", // warna tema (tosca)

  groom: { name: "Fadiel", avatar: "https://i.pravatar.cc/300?img=12", story: [img("budi1"), img("budi2"), img("budi3")], vn: SND(2) },
  bride: { name: "Silva", avatar: "https://i.pravatar.cc/300?img=47", story: [img("ani1"), img("ani2"), img("ani3")], vn: SND(3) },

  groupPhoto: img("group", 800, 800), // foto grup (header + halaman info grup)

  event: {
    iso: "2027-05-08T10:00:00+07:00", // dipakai countdown
    dateText: "Sabtu, 08 Mei 2027",
    timeText: "10.00 WIB",
    venue: "Gedung Serbaguna Bahagia, Jakarta",
    mapQuery: "Gedung Serbaguna Bahagia Jakarta",
    theme: "Hijau Tosca & Putih",
  },

  // Kartu rekening (muncul saat tamu menanyakan hadiah/rekening). Dummy.
  gifts: [
    { bank: "BCA", who: "Mempelai pria", number: "1234567890", name: "M Fadiel Ikchsan", colors: ["#003b7a", "#0b79d0"] },
    { bank: "Mandiri", who: "Mempelai wanita", number: "1230009876543", name: "SIlva Hamidah", colors: ["#001f45", "#0a4a8f"], accent: "#fcb017" },
  ],

  // Tombol balasan cepat di atas kolom ketik (sengaja sedikit)
  quick: ["Aku hadir", "Maaf, belum bisa hadir", "Mau kirim hadiah"],

  // Pengetahuan yang dipakai AI untuk menjawab. Tambah/ubah sesukamu (dummy).
  kb: [
    "Resepsi berlangsung pukul 10.00 sampai 13.00 WIB. Penerima tamu dibuka sejak 09.30 WIB.",
    "Parkir: tersedia area parkir mobil dan motor di halaman dan basement gedung, gratis untuk tamu.",
    "Transportasi: sekitar 10 menit dari stasiun terdekat. Bisa naik ojek/taksi online, titik turun di lobi utama gedung.",
    "Anak-anak boleh dibawa. Tersedia kursi khusus keluarga dan area bermain kecil.",
    "Undangan berlaku untuk nama yang tertera. Kalau ingin membawa pendamping, mohon kabari dulu supaya kami siapkan tempat.",
    "Makanan: prasmanan dan beberapa stan makanan. Semua halal, ada pilihan vegetarian.",
    "Hiburan: musik akustik live selama acara.",
    "Dokumentasi: ada photobooth dan fotografer. Tamu boleh foto, dan boleh pakai tagar #BudiAni.",
    "Hadiah tidak wajib, kehadiran dan doa sudah paling berarti. Yang mau memberi bisa transfer ke rekening BCA (Budi) atau Mandiri (Ani), atau membawa kado ke meja penerima tamu.",
    "Konfirmasi kehadiran lewat chat ini, paling lambat 24 April 2027.",
    "Penginapan terdekat: Hotel Contoh Jakarta, sekitar 5 menit dari lokasi.",
    "Siaran langsung: akad akan disiarkan online, tautannya dibagikan menjelang hari H.",
    "Kalau butuh bantuan di hari H, hubungi panitia: Rudi 0812-0000-0000.",
  ],

  /* Wallpaper chat. Kosongkan untuk pakai motif kawung bawaan.
     Isi dengan gambar motif wayang / Medan milikmu (terang & gelap). */
  wallpaper: { light: "", dark: "", size: "240px" },

  audio: { bgm: SND(1), voiceCall: SND(4) },
  video: { call: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  cover: img("cover", 900, 1400),
  gallery: ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"].map((s) => img(s, 600, 600)),

  ai: { endpoint: "https://dark-tree-ca4b.fadielikchsan1905.workers.dev/", model: "gpt-4o-mini" },
};

