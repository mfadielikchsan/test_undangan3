/* ====== UBAH DI SINI SAJA. Semua tampilan & balasan AI ikut berubah. ======
   Semua asset di bawah masih dummy (CDN). Ganti satu-satu dengan file milikmu,
   misalnya "assets/budi.jpg" atau URL CDN-mu sendiri. */
const img = (seed, w = 800, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const SND = (n) => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

window.CONFIG = {
  accent: "#0d9488", // warna tema (tosca)

  groom: { name: "Budi", avatar: "https://i.pravatar.cc/300?img=12", story: [img("budi1"), img("budi2"), img("budi3")], vn: SND(2) },
  bride: { name: "Ani", avatar: "https://i.pravatar.cc/300?img=47", story: [img("ani1"), img("ani2"), img("ani3")], vn: SND(3) },

  event: {
    iso: "2027-05-08T10:00:00+07:00", // dipakai countdown
    dateText: "Sabtu, 08 Mei 2027",
    timeText: "10.00 WIB",
    venue: "Gedung Serbaguna Bahagia, Jakarta",
    mapQuery: "Gedung Serbaguna Bahagia Jakarta",
    theme: "Hijau Tosca & Putih",
    dress: "Bebas (hijau tosca kalau mau menyesuaikan)",
  },

  // Kartu rekening yang muncul di chat saat tamu menanyakan hadiah / rekening (dummy)
  gifts: [
    { bank: "BCA", number: "1234567890", name: "Budi & Ani", colors: ["#0a3d91", "#1b7de0"] },
    { bank: "DANA", number: "081234567890", name: "Budi & Ani", colors: ["#0b5fd6", "#2fa8ff"] },
  ],

  // Tombol balasan cepat di atas kolom ketik
  quick: ["Lokasinya di mana?", "Dresscode-nya apa?", "Aku mau kirim hadiah", "Aku pasti hadir"],

  /* Wallpaper chat. Kosongkan untuk pakai motif kawung bawaan.
     Isi dengan gambar motif wayang / Medan milikmu (satu untuk terang, satu untuk gelap). */
  wallpaper: { light: "", dark: "", size: "240px" },

  audio: { bgm: SND(1), voiceCall: SND(4) },
  video: { call: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  cover: img("cover", 900, 1400),
  gallery: ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"].map((s) => img(s, 600, 600)),

  ai: { endpoint: "https://dark-tree-ca4b.fadielikchsan1905.workers.dev/", model: "gpt-4o-mini" },
};
