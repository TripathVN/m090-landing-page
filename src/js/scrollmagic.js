'use strict';

import {TimelineMax, TweenMax} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const SM = {};

SM.parallax = function () {

    let controller = new ScrollMagic.Controller({vertical: true});

    let tweenMap = new TimelineMax()
        .add([
            TweenMax.fromTo("#o-map .o-map__left .o-map__summary figure", 1, {y: 50}, {y: -110, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-map .o-map__left .o-map__summary--right", 1, {y: 95}, {y: -175, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-map .o-map__left .o-map__summary--testimonial .summary", 1, {y: 75}, {y: -160, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-map .o-map__right", 1, {y: -115}, {y: 125, ease: Linear.easeNone})
        ]);

    new ScrollMagic.Scene({triggerElement: "#o-map", duration: $(window).height()})
        .setTween(tweenMap)
        .addTo(controller);

    let tweenVideo = new TimelineMax()
        .add([
            TweenMax.fromTo("#o-video-boxes .o-video-boxes__left", 1, {y: 115}, {y: -175, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-video-boxes .o-video-boxes__right", 1, {y: -75}, {y: 115, ease: Linear.easeNone})
        ]);

    new ScrollMagic.Scene({triggerElement: "#o-video-boxes", duration: $(window).height()})
        .setTween(tweenVideo)
        .addTo(controller);

    let tweenMedia = new TimelineMax()
        .add([
            TweenMax.fromTo("#o-media-boxes .o-media-boxes__left", 1, {y: 115}, {y: -175, ease: Linear.easeNone}),
            TweenMax.fromTo("#o-media-boxes .o-media-boxes__right", 1, {y: -115}, {y: 125, ease: Linear.easeNone})
        ]);

    new ScrollMagic.Scene({triggerElement: "#o-media-boxes", duration: $(window).height()})
        .setTween(tweenMedia)
        .addTo(controller);

    let tweenContact = new TimelineMax()
        .add([
            TweenMax.fromTo("#o-p-contact__body .o-p-contact__body--float", 1, {y: 150}, {y: -150, ease: Linear.easeNone})
        ]);

    new ScrollMagic.Scene({triggerElement: "#o-p-contact__body", duration: $(window).height()})
        .setTween(tweenContact)
        .addTo(controller);


    let newsBackgroundPageTop = new TimelineMax()
        .add([
            TweenMax.fromTo("#o-parallax-child", 1, {y: 100}, {y: 250, ease: Linear.easeNone})
        ]);

    new ScrollMagic.Scene({triggerElement: "#o-parallax-parent", duration: $(window).height()})
        .setTween(newsBackgroundPageTop)
        .addTo(controller);
};

export default SM;