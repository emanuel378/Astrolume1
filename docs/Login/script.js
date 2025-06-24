document.addEventListener('DOMContentLoaded', function() {
    // Criação das estrelas animadas
    const container = document.getElementById('stars-container');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Tamanho aleatório entre 1 e 3 pixels
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Duração e delay aleatórios para a animação
        const duration = Math.random() * 5 + 3;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
    }

    // Validação do formulário de login
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validação simples
            if (!email || !password) {
                alert('Por favor, preencha todos os campos');
                return;
            }
            
            // Verifica se o email é válido
            if (!validateEmail(email)) {
                alert('Por favor, insira um email válido');
                return;
            }
            
            // Verifica se a senha tem pelo menos 6 caracteres
            if (password.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres');
                return;
            }
            
            // Simulação de login bem-sucedido
            console.log('Tentativa de login com:', { email, password });
            
            // Animação de loading
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="btn-text">ACESSANDO...</span>';
            
            // Simulação de delay para a requisição
            setTimeout(() => {
                // Redirecionamento após login bem-sucedido
                window.location.href = 'dashboard.html';
                
                // Caso o login falhe, restaurar o botão
                // submitBtn.disabled = false;
                // submitBtn.innerHTML = originalText;
                // alert('Email ou senha incorretos');
            }, 1500);
        });
    }

    // Efeitos interativos
    const inputs = document.querySelectorAll('.form-group input');
    
    inputs.forEach(input => {
        // Efeito ao focar
        input.addEventListener('focus', function() {
            const label = this.parentElement.querySelector('label');
            if (label) {
                label.style.color = '#9C6EFF'; // Cor equivalente a --space-purple
            }
        });
        
        // Efeito ao sair do foco
        input.addEventListener('blur', function() {
            const label = this.parentElement.querySelector('label');
            if (label) {
                label.style.color = '#E2F3F5'; // Cor equivalente a --space-light
            }
        });
    });

    // Função para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});