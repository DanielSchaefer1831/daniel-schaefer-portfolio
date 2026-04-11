// Hamburger-Menü: 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() 
{
    navLinks.classList.toggle('active');
});

// Schließung des Menüs, wenn man auf einen Link klickt:
const navItems = document.querySelectorAll('#nav-links a');

navItems.forEach(function(item) 
{
    item.addEventListener('click', function() 
    {
        navLinks.classList.remove('active');
    });
});