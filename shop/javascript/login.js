document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const button = form.querySelector('button');

    form.addEventListener('submit', (event) => {
        // 1. Stop the page from reloading automatically
        event.preventDefault();

        // 2. Grab the input values
        const username = form.username.value.trim();
        const password = form.password.value;

        // 3. Simple client-side validation
        if (!username || !password) {
            alert('Please fill out all fields.');
            return;
        }

        // 4. Visual feedback: Disable button and show "logging in..."
        button.disabled = true;
        button.textContent = 'Logging in...';

        // 5. Simulate an API network request (AJAX/Fetch)
        setTimeout(() => {
            // Mocking a successful login
            alert(`Welcome back, ${username}! Login successful.`);
            
            // Reset the form and button state
            form.reset();
            button.disabled = false;
            button.textContent = 'Login';
            
            // Optional: Redirect the user to a dashboard
            // window.location.href = 'dashboard.html';
        }, 1500); // 1.5 second artificial delay
    });
});