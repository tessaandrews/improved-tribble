const newFormHandler = async (event) => {
    event.preventDefault();
  
  
    const description = document.querySelector('#comment-input').value.trim();
    const post_id = document.getElementById("post-title").getAttribute('data-id');
  
    if (description) {
        
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  
  document.querySelector('.comment-form').addEventListener('submit', newFormHandler);