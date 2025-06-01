// Modal Image gallery
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => openModal(img));
  img.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(img);
    }
  });
});

function openModal(image) {
  modalImg.src = image.src;
  modalImg.alt = image.alt;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  // For accessibility - focus on modal so user can close it
  modal.focus();
}

modal.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalImg.alt = '';
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    modalImg.alt = '';
  }
});

// Form submission simulation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const respostaEl = document.getElementById('resposta');

  if (!nome || !email || !mensagem) {
    respostaEl.textContent = 'Por favor, preencha todos os campos.';
    respostaEl.style.color = '#a94442';
    return;
  }

  respostaEl.style.color = '#2f542c';
  respostaEl.textContent = 'Enviando sua mensagem...';

  setTimeout(() => {
    respostaEl.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    contactForm.reset();
  }, 1500);
}
