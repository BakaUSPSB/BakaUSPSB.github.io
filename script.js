document.addEventListener('DOMContentLoaded', function() {
    const folders = ['folder1', 'folder2', 'folder3'];
    const randomImageElement = document.getElementById('random-image');
    const pickImageButton = document.getElementById('pick-image-button');

    pickImageButton.addEventListener('click', function() {
        const randomFolder = folders[Math.floor(Math.random() * folders.length)];
        const randomImage = Math.floor(Math.random() * 3) + 1; // Assuming 3 images in each folder

        const imageUrl = `images/${randomFolder}/image${randomImage}.jpg`;
        randomImageElement.src = imageUrl;
    });
});