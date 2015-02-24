// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var windowHeight = window.innerHeight;

$(window).scroll(function(event){
    didScroll = true;
    setBackground();
});

function setBackground() {
    var st = $(this).scrollTop();
    
    if (st > innerHeight - 48)
    {
        $('header').removeClass("no-background").addClass("background");
        $('#logo').attr('src', 'img/KW-black.png');
    }
    else
    {
        $('header').removeClass("background").addClass("no-background");
        $('#logo').attr('src', 'img/KW.PNG');
    }
}

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > windowHeight * 1.5){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

function openModal(link){
    var modalId = "." + link.id + "-modal";
    
    $(".open-modal").hide("slow");
    $(modalId).show("slow").addClass("open-modal");
    $("#close-modal").show("slow");
}

function closeModal(){
    $(".open-modal").hide("slow").removeClass("open-modal");
    $("#close-modal").hide("slow");
}