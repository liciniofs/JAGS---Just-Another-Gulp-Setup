import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import bootstrapCarousel from 'bootstrap/dist/js/bootstrap';

class CMRGCarousel {
    constructor(carouselId) {
        this.carouselId = carouselId;        
    }

    init() {
        this.buildCarousel();
    }

    buildCarousel(carouselId) {

        const heroCarousel = $(this.carouselId).carousel({
            interval: 500
        });
    }
}

// export default Navigation;

let carousel = new CMRGCarousel();
carousel.buildCarousel('#heroCarousel');