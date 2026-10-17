// ANCAK KREASI - Script.js - Biru Muda Merah Putih - WA 085239261372
document.addEventListener('DOMContentLoaded', (// Pesan berjalan di atas Karya Asli - edit di sini saja
  const pesanKaryaAsli = "✨ 100% FOTO ASLI KARYA KAMI | 📸 DEKORASI | 🎉 Bukan Foto Google | 🔥 Diskon 15% | WA 085239261372";
  const trackKarya = document.querySelector('.marquee-track-karya');
  if(trackKarya){
    trackKarya.innerHTML = `<span>${pesanKaryaAsli} | </span><span>${pesanKaryaAsli} | </span>`;
  }) => {
  const WA_NUMBER = '6285239261372'; // 085239261372
  
  // Tahun otomatis di footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Efek ketik (typed) di info box
  const text = "Kami pakai foto asli hasil karya kami. Bukan foto Pinterest. Pelanggan langsung percaya karena lihat karya nyata.";
  let i = 0;
  const typedEl = document.getElementById('typedText');
  function typeWriter(){
    if(i < text.length){ typedEl.innerHTML += text.charAt(i); i++; setTimeout(typeWriter, 20); }
  }
  typeWriter();

  // Ganti foto dekorasi <-> dokumentasi
  const images = [
    {src:'dekorasi.jpg', title:'Paket Berto & Elda', price:'Rp3,5jt lengkap'},
    {src:'dokumentasi.jpg', title:'Dokumentasi Kaul Suster', price:'Mulai Rp800rb'}
  ];
  let idx = 0;
  const mainImg = document.getElementById('mainImage');
  const mainTitle = document.getElementById('mainTitle');
  const mainPrice = document.getElementById('mainPrice');
  const heroCard = document.getElementById('heroCard');
  
  function gantiFoto(){
    idx = (idx + 1) % images.length;
    mainImg.style.opacity = 0;
    setTimeout(()=>{
      mainImg.src = images[idx].src;
      mainTitle.textContent = images[idx].title;
      mainPrice.textContent = images[idx].price;
      mainImg.style.opacity = 1;
      showToast(`Menampilkan: ${images[idx].title}`);
    },200);
  }
  document.getElementById('btnGantiFoto').addEventListener('click', gantiFoto);
  mainImg.addEventListener('click', gantiFoto);
  heroCard.addEventListener('mouseenter', ()=>{ heroCard.style.transform = 'translateY(-6px) rotate(0.5deg)'; });
  heroCard.addEventListener('mouseleave', ()=>{ heroCard.style.transform = 'translateY(0)'; });

  // Scroll halus ke section
  document.querySelectorAll('[data-scroll]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = document.getElementById(btn.dataset.scroll);
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // Order dari harga -> isi form otomatis
  document.querySelectorAll('.btn-order').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const layanan = btn.dataset.layanan;
      document.getElementById('layanan').value = layanan.includes('DEKORASI') ? 'DEKORASI mulai Rp.1 jt' : layanan.includes('DOKUMENTASI') ? 'DOKUMENTASI Gereja - Model Kaul Suster' : layanan;
      document.getElementById('order').scrollIntoView({behavior:'smooth'});
      showToast(`Dipilih: ${layanan} - isi form ya!`);
    });
  });

  // Tombol order di hero
  document.querySelectorAll('[data-action="order"]').forEach(b=>{
    b.addEventListener('click', ()=> document.getElementById('order').scrollIntoView({behavior:'smooth'}));
  });

  // Form kirim ke WA
  document.getElementById('orderForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const layanan = document.getElementById('layanan').value;
    const tanggal = document.getElementById('tanggal').value;
    const detail = document.getElementById('detail').value;
    const pesan = `Halo RUTENG KREASI, saya mau ORDER:%0A%0ANama: ${nama}%0ANO WA: ${wa}%0ALayanan: ${layanan}%0ATanggal: ${tanggal}%0ADetail: ${detail}%0A%0AMohon info. Terima kasih!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${pesan}`, '_blank');
    showToast('Membuka WhatsApp 085239261372...');
  });

  // Button Share
  document.getElementById('btnShare').addEventListener('click', async ()=>{
    if(navigator.share){
      try{ await navigator.share({title:'RUTENG KREASI', text:'Lihat dekorasi Berto & Elda karya asli', url: window.location.href}); }
      catch{}
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link website disalin!');
    }
  });

  // Promo button
  document.getElementById('btnPromo').addEventListener('click', ()=>{
    showToast('🔥 PROMO: Dekorasi + Dokumentasi DISKON 15% - Chat WA 085239261372 sekarang!');
    setTimeout(()=> window.open(`https://wa.me/${WA_NUMBER}?text=Halo, saya mau promo 15% Dekorasi + Dokumentasi`, '_blank'), 800);
  });

  // Efek Ripple pada semua button
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      let rect = this.getBoundingClientRect();
      let size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      this.appendChild(ripple);
      setTimeout(()=> ripple.remove(), 600);
    });
  });

  // Toast function
  function showToast(msg){
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 3000);
  }
  window.showToast = showToast; // biar bisa dipakai
});
