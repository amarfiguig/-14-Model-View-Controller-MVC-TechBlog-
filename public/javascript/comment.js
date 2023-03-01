// Define an asynchronous function to handle the form submission
const commentFormHandler = async (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the value of the comment-body textarea and remove any leading or trailing whitespace
  const { value: comment_text } = document.querySelector('textarea[name="comment-body"]').trim();

  // Get the ID of the current post from the URL by splitting the URL path and getting the last segment
  const post_id = window.location.pathname.split('/').pop();

  // If the comment text is not empty, send a POST request to the /api/comments endpoint with the post ID and comment text in the request body
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ post_id, comment_text }), // convert the data to JSON
      headers: { 'Content-Type': 'application/json' } // set the Content-Type header to application/json
    });

    // If the response is OK, reload the page to display the new comment
    if (response.ok) {
      window.location.reload(); // use window.location.reload to refresh the page
    } else {
      alert(response.statusText); // if the response is not OK, show an alert with the status text
    }
  }
};

// Add an event listener to the form to listen for the submit event and call the commentFormHandler function
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
