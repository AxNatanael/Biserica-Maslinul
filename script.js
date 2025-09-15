// Lightbox: apri immagine ingrandita
(function(){
  const gallery = document.querySelectorAll('.galleria img');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');

  gallery.forEach(img => {
    img.addEventListener('click', () => {
      const full = img.dataset.full || img.src;
      lbImg.src = full;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  function closeLb(){
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  lbClose.addEventListener('click', closeLb);
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLb(); });

  // Form: finto invio (sostituisci con invio reale via fetch o form action)
  document.getElementById('sendBtn').addEventListener('click', ()=>{
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!email || !message){ 
      alert('Inserisci email e messaggio'); 
      return; 
    }
    alert('Messaggio inviato! (demo)');
    document.getElementById('contactForm').reset();
  });
})();
