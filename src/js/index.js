$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    $('.nav.nav-container').click(function() {
        $(this).toggleClass('active');
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
    });

    $('.still-slider').bxSlider({
        slideWidth: 2000,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0
    });

    var randomQuotes = [
        {
            quote: 'You can watch The Ridiculous 6 whenever you\'d like from the comfort of your own home. Lucky you.',
            quoteAuthor: 'Christy Lemire, ChristyLemire.com'
        },
        {
            quote: 'The best that can be said for the movie is that it\'s not as offensive as it could have been.',
            quoteAuthor: 'Josh Bell, Las Vegas Weekly'
        },
        {
            quote: 'This movie is so bad that it is good! I actually kind of like it.',
            quoteAuthor: 'Kyle Bacon, Just a normal dude'
        },
        {
            quote: 'I know comedy is subjective, but to the small base that still find these kinds of movies funny, can you please try to help me understand the appeal?',
            quoteAuthor: 'Felix Vasquez Jr., Cinema Crazed'
        },
        {
            quote: 'Well. If you have Netflix, at least it is free to stream?',
            quoteAuthor: 'Kyle Bacon, Just a normal dude'
        },
        {
            quote: 'As ever, Happy Madison has made what feels like a children’s movie. Not necessarily a movie for children, mind, but one made by them.',
            quoteAuthor: 'Jesse Hassenger, A.V. Club'
        },
        {
            quote: 'Critics need to lighten up! Not such a bad movie after all!',
            quoteAuthor: 'Kyle Bacon, Just a normal dude'
        }
    ];

    function randomQuote() {
        var min = Math.ceil(0),
            max = Math.floor(randomQuotes.length),
            random = Math.floor(Math.random() * (max - min)) + min;

        $('.js-quote').text(randomQuotes[random].quote);
        $('.js-quote-author').text(randomQuotes[random].quoteAuthor);
    };

    window.setInterval(function(){
        randomQuote();
    }, 5000);
});
