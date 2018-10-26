'use strict';

import 'bootstrap';

import tippy from 'tippy.js';

import SmoothScroll from 'smoothscroll-for-websites';
import SM from './scrollmagic';

import 'lazysizes';

const OM = {};

OM.smoothscroll = function () {
	new SmoothScroll;
};

OM.parallax = function () {
    SM.parallax();
};

$(document).ready(function () {

	/**
	 * SmoothScroll
	 */
	OM.smoothscroll();

	/**
	 * Parallax
	 */
	OM.parallax();
});

export default OM;