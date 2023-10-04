// Select the posts container div
const postsContainer = document.getElementById('posts-container');

// Fetch the JSON file
fetch('/res/data.json') // Replace 'your-json-file.json' with the actual path to your JSON file
  .then(response => response.json())
  .then(data => {
    // Loop through the posts and display them
    data.posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <p>Date: ${post.date}</p>
        <p>${post.content}</p>
      `;

      // Check if there's an image URL provided
      if (post.picture) {
        const imageElement = document.createElement('img');
        imageElement.src = `res/pictures/${post.picture}`;
        imageElement.alt = `Image for Post ${post.ID}`;
        postElement.appendChild(imageElement);
      }

      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching and displaying posts:', error));
