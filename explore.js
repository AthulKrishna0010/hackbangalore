document.addEventListener("DOMContentLoaded", function() {
    var filterButton = document.getElementById('sortButton');
    var postContainer = document.getElementById('grid');
  
    // Load JSON data
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            filterButton.addEventListener('click', function() {
              
              var selectedBudget = parseInt(document.getElementById('budgetFilter').value);
  
                // Clear previous posts
                postContainer.innerHTML = '';
  
                // Filter posts based on selected budget
                posts.forEach(post => {
                    if (selectedBudget === 0 && post.budget < 500) {
                        displayPost(post);
                    } else if (selectedBudget === 500 && post.budget >= 500 && post.budget <= 1000) {
                        displayPost(post);
                    } else if (selectedBudget === 1000 && post.budget > 1000 && post.budget <= 5000) {
                        displayPost(post);
                    } else if (selectedBudget === 5000 && post.budget > 5000) {
                        displayPost(post);
                    }
                });
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
  
    function displayPost(post) {
        var img = document.createElement('img');
        img.src = post.image;
        img.height = 180;
        img.width = 290;
        postContainer.appendChild(img);
    }
  });