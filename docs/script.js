
// Espere o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';  // Usando className em vez de classList.add
        
        // Tamanho aleatório entre 1 e 3 pixels
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        
        // Duração da animação aleatória
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        starsContainer.appendChild(star);
    }
});