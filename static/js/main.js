// Expand/collapse paper details
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.expand-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var details = btn.nextElementSibling;
      if (details && details.classList.contains('paper-details')) {
        details.classList.toggle('open');
        btn.classList.toggle('active');
        btn.textContent = details.classList.contains('open') ? '\u2212' : '+';
      }
    });
  });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});
