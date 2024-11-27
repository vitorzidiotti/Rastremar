// scrpit.js

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    // Captura todos os links de ancoragem (a tags com href começando com '#')
    const menuLinks = document.querySelectorAll('a[href^="#"]');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
  
        const targetId = link.getAttribute('href').substring(1); // Obtém o ID do elemento alvo
        const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo
  
        if (targetElement) {
          // Realiza o scroll suave até o elemento alvo
          window.scrollTo({
            top: targetElement.offsetTop, // A posição do elemento alvo
            behavior: 'smooth' // Scroll suave
          });
        }
      });
    });
  });