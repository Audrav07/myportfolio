$(document).ready(function() {
    AOS.init({
        duration: 1200,
    })
    $(".pagetransition").click(function() {
        var href = $(this).attr('href');
        // Delay settings
        setTimeout(function() {
            window.location = href
        }, 600);
        return false;
    });
});
        

      
