(document).ready(function() {
    var loadBtn = $('#theBtn');

    loadBtn.on('click', function() {

        $.ajax('superheroes.php', {
            method: "GET",
            dataType: 'json'
        }).done(function(response) {
            var superheroes = response.superheroes;

            $('#results').append("<ul></ul>");
            $(superheroes).each(function() {
                $('#results ul').append('<li><h3>' + this.name + ' (a.k.a ' + this.alias + ')</h3><p>' + this.email + '</p></li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});