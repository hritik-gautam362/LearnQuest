// Handle form switching with slide effect
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const formToShow = button.dataset.form;
        const currentForm = document.querySelector('.form.active');
        const nextForm = document.getElementById(formToShow);

        // Update toggle buttons
        document.querySelector('.toggle-btn.active').classList.remove('active');
        button.classList.add('active');

        // Slide effect
        currentForm.classList.add('slide-left');
        currentForm.classList.remove('active');
        
        nextForm.classList.add('active');
        
        setTimeout(() => {
            currentForm.classList.remove('slide-left');
        }, 500);
    });
});

// Handle password visibility
document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling;
        const type = passwordInput.getAttribute('type');
        passwordInput.setAttribute(
            'type',
            type === 'password' ? 'text' : 'password'
        );
    });
});
