// Select the posts container div
const postsContainer = document.getElementById('posts-container');

// Fetch the JSON file
fetch('/res/data.json') // Replace 'your-json-file.json' with the actual path to your JSON file
  .then(response => response.json())
  .then(data => {
    // Create an unordered list for the posts
    const postsList = document.createElement('ul');
    postsList.classList.add('post-list'); // Add a class for styling the list

    // Loop through the posts and display them
    data.posts.forEach(post => {
      // Create a list item for each post
      const listItem = document.createElement('dl');
      listItem.classList.add('post-item'); // Add a class for styling the list item

      // Create a div for the date (top-right)
      const dateElement = document.createElement('p');
      dateElement.textContent = `Date: ${post.date}`;
      dateElement.classList.add('date-top-right'); // Add styling class for positioning the date
      listItem.appendChild(dateElement);
      // Check if there's an image URL provided
      if (post.picture) {
        const imageElement = document.createElement('img');
        imageElement.src = `res/pictures/${post.picture}`;
        imageElement.alt = `Image for Post ${post.ID}`;
        imageElement.style.width = '100%'; // Set width to 100%
        imageElement.style.height = 'auto'; // Maintain aspect ratio
        listItem.appendChild(imageElement);
      }

      // Add the date and content text to the list item

      // Add the content text
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      listItem.appendChild(contentElement);

      // Add the list item to the posts list
      postsList.appendChild(listItem);
    });

    // Append the posts list to the posts container
    postsContainer.appendChild(postsList);
  })
  .catch(error => console.error('Error fetching and displaying posts:', error));
