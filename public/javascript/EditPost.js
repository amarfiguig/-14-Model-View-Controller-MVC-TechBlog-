// Define an async function to handle the edit form submission
const editFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target; // Get the form element from the event object
  const formData = new FormData(form); // Create a new FormData object from the form data

  try {
    const response = await fetch(`/api/posts/${formData.get('post-id')}`, { // Send a PUT request to the server to update the post with the given ID
      method: 'PUT', // Use the PUT method to update the post
      body: formData // Send the form data as the request body
    });

    if (response.ok) { // If the response status is OK, redirect to the dashboard page
      window.location.replace('/dashboard');
    } else { // Otherwise, throw an error with the response status text
      throw new Error(response.statusText);
    }
  } catch (error) { // If an error occurs during the fetch request, display an error message to the user
    alert(`Failed to update post: ${error.message}`);
  }
};

// Add an event listener to the edit post form to handle form submissions
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
