/**
 * Lógica Interativa da Página de Entrega
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.APP_CONFIG || {
    downloadUrl: 'downloads/autowin.zip',
    downloadFileName: 'autowin.zip',
    whatsappUrl: 'https://wa.me/5519989119386?text=Quero%20liberar%20meu%20acesso%20no%20Autowin%0Aemai%3A%20(coloque%20seu%20email%22',
    pageTitle: 'PARABENS FELA - AUTOMATIZE TUDO 100%'
  };

  // Elementos do DOM
  const btnEnviarDados = document.getElementById('btnEnviarDados');
  const btnDownload = document.getElementById('btnDownload');

  // Modal de Confirmação de Download
  const modalConfirmDownload = document.getElementById('modalConfirmDownload');
  const btnConfirmClose = document.getElementById('btnConfirmClose');
  const btnConfirmarBaixar = document.getElementById('btnConfirmarBaixar');
  const btnIrEnviarDados = document.getElementById('btnIrEnviarDados');
  const toastContainer = document.getElementById('toastContainer');

  /* ==========================================================
     1. BOTÃO ENVIAR DADOS -> REDIRECIONA PARA WHATSAPP
     ========================================================== */
  btnEnviarDados.addEventListener('click', (e) => {
    createRipple(e, btnEnviarDados);
    redirecionarWhatsapp();
  });

  function redirecionarWhatsapp() {
    window.open(config.whatsappUrl, '_blank');
  }

  /* ==========================================================
     2. BOTÃO DOWNLOAD DO ARQUIVO -> CARD DE CONFIRMAÇÃO
     ========================================================== */
  btnDownload.addEventListener('click', (e) => {
    createRipple(e, btnDownload);
    abrirModalConfirmDownload();
  });

  function abrirModalConfirmDownload() {
    modalConfirmDownload.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function fecharModalConfirmDownload() {
    modalConfirmDownload.classList.remove('active');
    document.body.style.overflow = '';
  }

  btnConfirmClose.addEventListener('click', fecharModalConfirmDownload);

  modalConfirmDownload.addEventListener('click', (e) => {
    if (e.target === modalConfirmDownload) {
      fecharModalConfirmDownload();
    }
  });

  // Fechar com a tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalConfirmDownload.classList.contains('active')) {
      fecharModalConfirmDownload();
    }
  });

  // Botão "Enviei os dados, posso baixar" -> executa o download do autowin.zip
  btnConfirmarBaixar.addEventListener('click', () => {
    fecharModalConfirmDownload();
    executarDownload();
  });

  // Botão "Ainda não enviei (Enviar Dados Agora)" -> abre o WhatsApp
  btnIrEnviarDados.addEventListener('click', () => {
    fecharModalConfirmDownload();
    redirecionarWhatsapp();
  });

  /* ==========================================================
     3. EXECUÇÃO DO DOWNLOAD DO ARQUIVO
     ========================================================== */
  function executarDownload() {
    const btnText = btnDownload.querySelector('.btn-text');
    const originalText = btnText.textContent;

    // Estado de Carregamento
    btnDownload.disabled = true;
    btnText.textContent = 'Baixando Arquivo...';

    // Cria e aciona o link de download direto
    const link = document.createElement('a');
    link.href = config.downloadUrl;
    link.download = config.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Feedback visual de sucesso
    setTimeout(() => {
      btnText.textContent = 'Download Iniciado! ✓';
      showToast(`🎉 Download iniciado! O arquivo ${config.downloadFileName} está sendo baixado.`, 'success');

      // Restaura o botão após alguns segundos
      setTimeout(() => {
        btnText.textContent = originalText;
        btnDownload.disabled = false;
      }, 2500);
    }, 600);
  }

  /* ==========================================================
     4. SISTEMA DE TOASTS FLUTUANTES
     ========================================================== */
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#811df9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `${iconSvg} <span>${escapeHtml(message)}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3500);
  }

  /* ==========================================================
     5. EFEITO RIPPLE NOS BOTÕES
     ========================================================== */
  function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
