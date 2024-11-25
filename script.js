// Array of image URLs
const imageUrls = [
    { url: 'https://picsum.photos/id/237/200/300' },
    { url: 'https://picsum.photos/id/238/200/300' },
    { url: 'https://picsum.photos/id/239/200/300' }
];

// Function to load an image
function loadImage(image) {
    return new Promise((resolve, reject) => {
        const img = new Image(); // Create an image element
        img.src = image.url;

        // Resolve the promise when the image loads successfully
        img.onload = () => {
            resolve(img); // Image successfully loaded
        };

        // Reject the promise if image fails to load
        img.onerror = () => {
            reject(new Error(`Failed to load image's URL: ${image.url}`));
        };
    });
}

// Function to handle the image download and display process
function downloadAndDisplayImages() {
    const outputDiv = document.getElementById('output'); // Get the output div
    outputDiv.innerHTML = ''; // Clear any previous images

    // Use Promise.all to download all images in parallel
    Promise.all(imageUrls.map(loadImage))
        .then((images) => {
            // If all images are loaded, append them to the output div
            images.forEach((img) => {
                outputDiv.appendChild(img); // Add image to the div
            });
        })
        .catch((error) => {
            // Handle any error (image failed to load)
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            outputDiv.appendChild(errorMessage); // Show error message
        });
}

// Add an event listener to the button to trigger the image download process
document.getElementById('download-images-button').addEventListener('click', downloadAndDisplayImages);
