const upvoteBtn = document.querySelector('.upvote-btn');

upvoteBtn.addEventListener('click', async (event) => {
  try {
    event.preventDefault();

    const id = window.location.pathname.split('/').pop();
    const response = await fetch(`/api/posts/${id}/upvote`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post_id: id })
    });

    if (!response.ok) {
      throw new Error(`Failed to upvote post: ${response.status} ${response.statusText}`);
    }

    location.reload();
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
