import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
class Navigation {

    init() {
        this.menuBgReplace();
        this.replaceSvg();
        this.searchBtn();
        this.scrollToTop();
        this.showScrollToTop();
        this.stickyNav();
        this.subMenuAction( '.online-services' );
    }

    stickyNav() {

        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 300) {
                $(".js-cmrg-sticky").css("display", "flex");
            } else {
                $(".js-cmrg-sticky").fadeOut();
            }
        });
    }

    scrollToTop() {
        $(".js-scroll-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
          });
    }

    showScrollToTop() {

        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 300) {
                $(".js-scroll-to-top").fadeIn();
            } else {
                $(".js-scroll-to-top").fadeOut();
            }
        });
    }

    searchBtn() {        
        $(".search-btn").each(
            function() {
                $(this).on(
                    "click",
                    function( event ) {
                        event.preventDefault    ();
                        $(this).siblings(".search").animate({width:'toggle'},350);
                    }
                )
            }
        );
    }

    replaceSvg() {
        /*
        * Replace all SVG images with inline SVG
        */
        jQuery('img.svg').each(function(){
            var $img     = jQuery(this);
            var imgID    = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL   = $img.attr('src');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }

    subMenuAction( element ) {
        $( element ).mouseenter( this.fadeInNav( element ) ).mouseleave( this.fadeOutNav(  ) );
    }

    fadeInNav( element ) {
        $( element ).each(
            function() {
                $(this).hover(
                    function() {
                        $( this ).find( 'li' ).each(function(i) {
                            $(this).delay(100 * i).fadeIn(500);
                        });
                    }
                )
            }
        );
    }

    fadeOutNav( element ) {
        $( element ).each(
            function() {
                $(this).hover(
                    function() {
                        $( this ).find( 'li' ).each(function(i) {
                            $(this).delay(100 * i).fadeOut(500);
                        });
                    }
                )
            }
        );
    }

    menuBgReplace() {

        let bgTarget = $(".js-home-nav");

        $(".home-nav-item").each(
            function() {

                let bgSource = $(this).find(".js-nav-item-bg");
                let bg       = $(bgSource).attr('style');
                
                $(this).hover(
                    function() {
                        
                        if( $(this).hasClass('active') ) {
                            $(this).removeClass('active');
                        } else {
                            $(this).addClass('active');
                        }                        
                        
                        $(".home-nav-item").each(
                            function() {
                                $(this).find(".js-nav-item-bg").fadeOut();
                            }
                        );   
                            
                        $(bgTarget).attr( 'style', bg );
                    }
                );
            }
        );
    }
}

// export default Navigation;

let navigation = new Navigation();
navigation.init();