//your JS code here. If required.

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img); 
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`)); 
    img.src = image.url;
  });
}

function downloadAndDisplayImages() {
  const output = document.getElementById("output");
  const btn = document.getElementById("download-images-button");

  button.disabled = true;

  Promise.all(imageUrls.map(downloadImage))
    .then((images) => {
      output.innerHTML = '';

      images.forEach((img) => {
        output.appendChild(img);
      });

      btn.disabled = false;
    })
    .catch((error) => {
      console.error(error.message);

      output.innerHTML = `<p style="color: red;">${error.message}</p>`;

      btn.disabled = false;
    });
}


