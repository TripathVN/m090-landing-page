'use strict';

import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

const SM = {};

SM.parallax = function() {
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter",
			duration: "200%"
		}
	});

	new ScrollMagic.Scene({triggerElement: "#o-parallax"})
			.setTween("#o-parallax .o-parallax__background", {y: "70%", ease: Linear.easeNone})
			.addTo(controller);
};

export default SM;