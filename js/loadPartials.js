function loadPartial(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load header and footer
window.addEventListener('DOMContentLoaded', () => {
  loadPartial('header', 'partials/header.html');
  loadPartial('footer', 'partials/footer.html');
  loadPartial('header-section', 'partials/header-section.html')
  loadPartial('header-home', 'partials/header-home.html')
  loadPartial('header-about', 'partials/header-about.html')
});
