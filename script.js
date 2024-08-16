
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('.modal-footer .btn-primary').addEventListener('click', function() {
    alert('Redirecting to shop page...');
 
});


document.querySelectorAll('.card-img-top').forEach(img => {
    img.style.display = 'block';
    img.style.margin = '0 auto';
});

document.querySelectorAll('#pic').forEach(img => {
    img.style.height = '150px';
    img.style.width = '150px';
});

