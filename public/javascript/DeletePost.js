// Define an asynchronous function to handle the form submission
const deleteFormHandler = async (event) => {
  event.preventDefault(); // prevent the default behavior of the click event

  // Get the ID of the current post from the URL by splitting the URL path and getting the last segment
  const id = window.location.pathname.split('/').pop();

  // Send a DELETE request to the /api/posts/:id endpoint to delete the post with the given ID
  const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });

  // If the response is OK, redirect the page to the dashboard
  if (response.ok) {
    window.location.replace('/dashboard/');
  } else {
    // If the response is not OK, show an alert with the status text
    alert(response.statusText);
  }
};

// Add an event listener to the delete button to listen for the click event and call the deleteFormHandler function
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
