document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('b1').onclick = function() {
        document.getElementById('h1').innerHTML = "Junior Developer";
        document.getElementById('h2').innerHTML = "Intern at HTC Global";
        document.getElementById('h3').innerHTML = "BE Graduate";
        document.getElementById('visible').style.display = 'none';
        document.getElementById('hidden').style.display = 'block';    
    };
});

