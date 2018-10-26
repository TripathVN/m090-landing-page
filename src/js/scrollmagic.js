'use strict';

import {TimelineMax, TweenMax} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const SM = {};

SM.parallax = function () {

    let tween = new TimelineMax()
        .add([
            TweenMax.fromTo("#o-map .o-map__left .o-map__summary figure", 1, {y: 35}, {y: -135, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-map .o-map__left .o-map__summary--right", 1, {y: 115}, {y: -285, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-map .o-map__left .o-map__summary--testimonial .summary", 1, {y: 75}, {y: -195, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-map .o-map__right", 1, {y: 115}, {y: -95, ease: Linear.easeNone})
        ]);

    let controller = new ScrollMagic.Controller({vertical: true});

    new ScrollMagic.Scene({triggerElement: "#o-map", duration: $(window).height()})
        .setTween(tween)
        .addTo(controller);
};

export default SM;