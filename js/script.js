// kondisi saat di klik 
$('.page').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // ambil element
    var elemenTujuan = $(tujuan);
    // perpindahan
    $ ('body').animate({
        scrolltop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

 e.preventdefault();
    
});