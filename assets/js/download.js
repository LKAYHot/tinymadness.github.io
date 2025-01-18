document.querySelectorAll('.download-image').forEach(image => {
    const imageUrl = image.getAttribute('data-image');
    if (imageUrl) {
      image.style.backgroundImage = `url('${imageUrl}')`;
    }
  });