import marquee from 'jquery.marquee';

$('.marquee').marquee({
    //speed in milliseconds of the marquee
    // duration: 10000,
    speed: 35,
    //gap in pixels between the tickers
    // gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated  : true,
    startVisible: true,
    pauseOnHover: true
});