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
        
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#home-top').fadeIn(); 
        } else { 
            $('#home-top').fadeOut(); 
        } 
    }); 
    $('#home-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

      
