const logoutButton = document.querySelector('#logout');

logoutButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Failed to logout');
    }

    document.location.replace('/');
  } catch (error) {
    console.error(error);
    alert('Failed to logout');
  }
});
