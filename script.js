  const toggleButton = document.getElementById('toggleButton');
  const hiddenText = document.getElementById('hiddenText');

  if (toggleButton && hiddenText) {
    toggleButton.addEventListener('click', () => {
      if (getComputedStyle(hiddenText).display === 'none') {
        hiddenText.style.display = 'block';
        toggleButton.textContent = 'Mostrar menos';
      } else {
        hiddenText.style.display = 'none';
        toggleButton.textContent = 'Mostrar mais';
      }
    });
  } else {
    console.warn('Elementos toggleButton ou hiddenText não encontrados.');
  }

  
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  if (modal && modalImage && closeModal) {
    document.querySelectorAll('.thumbnail').forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  } else {
    console.warn('Elementos do modal não encontrados.');
  }

  
  const form = document.getElementById('feedbackForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (name && email && message) {
        alert('Feedback enviado com sucesso!');
        form.reset();
      } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
      }
    });
  } else {
    console.warn('Formulário de feedback não encontrado.');
  }
