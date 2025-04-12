let contactClickCount = 0;
const contactLink = document.querySelector('nav a[href="#contact"]');

if (contactLink) {
  contactLink.addEventListener('click', function (e) {
    contactClickCount++;
    if (contactClickCount === 3) {
      window.location.href = "https://youtu.be/xvFZjo5PgG0?si=W75Gzr1A5ZLHQ6V9";
    }
  });
}