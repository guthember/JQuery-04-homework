$(function(){
    let $pictures= $('img');

    // console.log($pictures);
    $pictures.click( function() {
        let actPicture = $(this);
        // ha nagy akkor nem kell vele semmit csinálni!
        if( !actPicture.hasClass('half-size')) {
            return;
        }

        // nagy képet lekicsinyítjük
        let bigPicture = $('img:not(.scale-half)');
        bigPicture.addClass('half-size');
        
        // aktuális kis képet megnagyítjuk
        actPicture.removeClass('half-size');
    });

});