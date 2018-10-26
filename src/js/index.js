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

OM.tippy = function () {
    tippy('.tippy', {
        content: "DMM",
        theme: 'm090',
        arrowType: 'round',
        size: 'large',
        duration: 250,
        animation: 'shift-toward'
    });
};

/**
 * Tippy
 */
OM.tippy();

/**
 * SmoothScroll
 */
OM.smoothscroll();
/**
 * Parallax
 */
OM.parallax();

$(document).ready(function () {

});

export default OM;