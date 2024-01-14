function toggleText() {
    var textContent = document.getElementById("text-content");
    textContent.classList.toggle("show");

    var toggleButton = document.querySelector(".faqs-plus");
    toggleButton.textContent = textContent.classList.contains("show");
    
    function changeImage() {
    var imageElement = document.getElementById("changeableImage");

    // Изменяем источник изображения в зависимости от текущей картинки
    if (currentImage === 1) {
        imageElement.src = "image2.jpg";
        currentImage = 2;
    } else {
        imageElement.src = "image1.jpg";
        currentImage = 1;
    }
}
}