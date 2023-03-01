// Define an asynchronous function to handle the form submission
const newFormHandler = async (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the values of the title and post_url inputs using destructuring
  const { value: title } = document.querySelector('input[name="post-title"]');
  const { value: post_url } = document.querySelector('input[name="post-url"]');

  // Send a POST request to the /api/posts endpoint with the title and post_url in the request body
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({ title, post_url }), // convert the data to JSON
    headers: { 'Content-Type': 'application/json' } // set the Content-Type header to application/json
  });

  // If the response is OK, redirect the user to the dashboard
  if (response.ok) {
    window.location.replace('/dashboard'); // use window.location.replace to navigate to the dashboard
  } else {
    alert(response.statusText); // if the response is not OK, show an alert with the status text
  }
};

// Add an event listener to the form to listen for the submit event and call the newFormHandler function
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

