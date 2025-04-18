document.getElementById('search').addEventListener('keyup', function() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    
    cards.forEach(function(card) {
        var title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
