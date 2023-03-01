const handleSubmit = async (event, path) => {
  event.preventDefault();
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    const response = await fetch(path, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const handleSignup = (event) => {
  handleSubmit(event, '/api/users');
};

const handleLogin = (event) => {
  handleSubmit(event, '/api/users/login');
};

document.querySelector('.signup-form').addEventListener('submit', handleSignup);
document.querySelector('.login-form').addEventListener('submit', handleLogin);
