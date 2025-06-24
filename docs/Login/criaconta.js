document.addEventListener('DOMContentLoaded', function () {
    // Criação das estrelas animadas
    const container = document.getElementById('stars-container');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const duration = Math.random() * 5 + 3;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(star);
    }

    const transitionOverlay = document.getElementById('transitionOverlay');
    const rocket = document.querySelector('.rocket-container');
    const passwordInput = document.getElementById('password');
    const strengthBars = document.querySelectorAll('.strength-bar');
    const loginLink = document.getElementById('loginLink');
    const launchBtn = document.getElementById('launchBtn'); // Botão fora do formulário

    // Clique no botão DECOLAR
    if (launchBtn) {
        launchBtn.addEventListener('click', function () {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validação
            if (!name || !email || !password || !confirmPassword) {
                showError('Por favor, preencha todos os campos');
                return;
            }

            if (!validateEmail(email)) {
                showError('Por favor, insira um email válido');
                return;
            }

            if (password.length < 6) {
                showError('A senha deve ter pelo menos 6 caracteres');
                return;
            }

            if (password !== confirmPassword) {
                showError('As senhas não coincidem');
                return;
            }

            // Tudo certo! Iniciar animação
            startTakeoffAnimation();

            // Redirecionar após animação
            setTimeout(() => {
                window.location.href = '/TelaInicial_liçoes/index.html';
            }, 2000);
        });
    }

    // Link para login com transição
    if (loginLink) {
        loginLink.addEventListener('click', function (e) {
            e.preventDefault();
            startTransitionAnimation(this.href);
        });
    }

    // Força da senha em tempo real
    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            updatePasswordStrength(this.value);
        });
    }

    // Função: animação de decolagem
    function startTakeoffAnimation() {
        if (rocket) {
            rocket.style.animation = 'takeoff 1.5s forwards';
            rocket.style.filter = 'drop-shadow(0 0 20px rgba(156, 110, 255, 0.8))';
        }

        if (transitionOverlay) {
            transitionOverlay.style.opacity = '1';
        }
    }

    // Função: animação de transição para outras páginas
    function startTransitionAnimation(href) {
        if (transitionOverlay) {
            transitionOverlay.style.opacity = '1';
        }

        setTimeout(() => {
            window.location.href = href;
        }, 800);
    }

    // Função: atualizar a força da senha
    function updatePasswordStrength(password) {
        const strength = calculatePasswordStrength(password);

        strengthBars.forEach((bar, index) => {
            if (index < strength) {
                if (strength === 1) {
                    bar.style.background = '#FF2D75'; // Fraco (vermelho)
                } else if (strength === 2) {
                    bar.style.background = '#FFD166'; // Médio (amarelo)
                } else {
                    bar.style.background = '#00F5FF'; // Forte (azul neon)
                }
            } else {
                bar.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    }

    // Função: calcular força da senha
    function calculatePasswordStrength(password) {
        if (password.length === 0) return 0;
        if (password.length < 6) return 1;

        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecial = /[^a-zA-Z0-9]/.test(password);

        let strength = 1;
        if (password.length >= 8) strength++;
        if (hasLetters && hasNumbers) strength++;
        if (hasSpecial) strength++;

        return Math.min(strength, 3);
    }

    // Função: validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Função: mostrar erro
    function showError(message) {
        alert(message); // você pode trocar por uma mensagem visual abaixo do campo
    }
});
