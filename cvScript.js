function isElementInViewport(elem) {

    var $elem = $(elem);
    
    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
   // var viewportTop = $(scrollElem).scrollTop();
    var viewportTop = window.scrollY;
    var viewportBottom = viewportTop + (document.body.clientHeight);
    
    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();
    console.log(viewportBottom);
    console.log(viewportTop);
    console.log(elemTop);
    console.log(elemBottom);
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}




// Check if it's time to start the animation.
function checkAnimation() {
    
    var $elem = $('#htmlcss');

   
    // If the animation has already been started
    if (!$elem.hasClass('c75')) {
        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('c75');


        }
    }

    

    var $elem2 = $('#phpmysql');


    // If the animation has already been started
    if (!$elem2.hasClass('c75')) {
        if (isElementInViewport($elem2)) {
            // Start the animation
            $elem2.addClass('c75');
        }
    }


    

    var $elem3 = $('#JavaScript');


    // If the animation has already been started
    if (!$elem3.hasClass('c75')) {
        if (isElementInViewport($elem3)) {
            // Start the animation
            $elem3.addClass('c75');
        }
    }

    

    var $elem4 = $('#C');


    // If the animation has already been started
    if (!$elem4.hasClass('c75')) {

        if (isElementInViewport($elem4)) {
            // Start the animation
            $elem4.addClass('c75');
        }
    }
    var $elem5 = $('#JAVA');


    // If the animation has already been started
    if (!$elem5.hasClass('c80')) {

        if (isElementInViewport($elem5)) {
            // Start the animation
            $elem5.addClass('c80');
        }
    }
    var $elem6 = $('#vueJS');


    // If the animation has already been started
    if (!$elem6.hasClass('c50')) {

        if (isElementInViewport($elem6)) {
            // Start the animation
            $elem6.addClass('c50');
        }
    }
    var $elem7 = $('#SPRING');


    // If the animation has already been started
    if (!$elem7.hasClass('c70')) {

        if (isElementInViewport($elem7)) {
            // Start the animation

            $elem7.addClass('c70');
        }
    }

    var $elem8 = $('#creati');

    if (!$elem8.hasClass('c80')) {

        if (isElementInViewport($elem8)) {
            // Start the animation

            $elem8.addClass('c80');
        }
    }

    var $elem8 = $('#adapt');

    if (!$elem8.hasClass('c90')) {

        if (isElementInViewport($elem8)) {
            // Start the animation

            $elem8.addClass('c90');
        }
    }

    var $elem8 = $('#serieux');

    if (!$elem8.hasClass('c95')) {

        if (isElementInViewport($elem8)) {
            // Start the animation

            $elem8.addClass('c95');
        }
    }

    var $elem9 = $('#equipe');

    if (!$elem9.hasClass('c90')) {

        if (isElementInViewport($elem9)) {
            // Start the animation

            $elem9.addClass('c90');
        }
    }
}

// Capture scroll events
$(window).scroll(function () {
    
    checkAnimation();
    
});







































