document.addEventListener('DOMContentLoaded', function () {
  var flipbook = $('#flipbook');

  // Initialize Turn.js
  flipbook.turn({
    width: 800,
    height: 600,
    autoCenter: true,
    duration: 1000,
    gradients: true
  });

  // Add functionality for arrow buttons
  document.getElementById('nextBtn').addEventListener('click', function() {
    flipbook.turn('next');
  });

  document.getElementById('prevBtn').addEventListener('click', function() {
    flipbook.turn('previous');
  });
});
