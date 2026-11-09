// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// lightbox for project galleries
const gallery = document.querySelector('.gallery');
if (gallery) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  const big = box.querySelector('img');
  const close = () => box.classList.remove('open');

  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    box.classList.add('open');
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// current year in footer
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
