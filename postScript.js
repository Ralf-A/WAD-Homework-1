// Select the posts container div
const postsContainer = document.getElementById('posts-container');

// Fetch the JSON file
fetch('/res/data.json') // Replace 'your-json-file.json' with the actual path to your JSON file
  .then(response => response.json())
  .then(data => {
    // Loop through the posts and display them
    data.posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post-container'); // Add a class for styling

      // Check if there's an image URL provided
      if (post.picture) {
        const imageElement = document.createElement('img');
        imageElement.src = `res/pictures/${post.picture}`;
        imageElement.alt = `Image for Post ${post.ID}`;
        imageElement.style.width = '100%'; // Set width to 100%
        imageElement.style.height = '20%'; // Set height to 20%
        postElement.appendChild(imageElement);
      }



      // Create a div for the date
      const dateElement = document.createElement('p');
      dateElement.textContent = `Date: ${post.date}`;
      dateElement.classList.add('date-right'); // Add styling class for positioning the date
      postElement.appendChild(dateElement);

        // Add the content text
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching and displaying posts:', error));
