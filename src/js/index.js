'use strict';

import 'bootstrap';

import tippy from 'tippy.js';

import SmoothScroll from 'smoothscroll-for-websites';

import Parallax from 'parallax-js'

import SM from './scrollmagic';

import 'lazysizes';

import '@fancyapps/fancybox';

const OM = {};

OM.smoothscroll = function () {
    new SmoothScroll;
};

OM.parallax = function () {
    SM.parallax();
};

OM.carouselParallax = function () {
    let scene = document.getElementById("o-scene");
    if (scene) {
        new Parallax(scene, {
            relativeInput: true
        });
    }
};

OM.carouselParallax();

OM.tippy = function () {
    tippy('#tippy-duyld', {
        content: "Ứng dụng M090 làm một phần không thể thiếu trong kế hoạch chi tiêu hàng tháng của gia đình tôi",
        theme: 'm090',
        arrow: true,
        arrowType: 'round',
        size: 'large',
        duration: 250,
        animation: 'shift-toward'
    });
    tippy('#tippy-tuanna', {
        content: "Tôi có thể dễ dàng tạo gói cước rất phù hợp với cá nhân",
        theme: 'm090',
        arrow: true,
        arrowType: 'round',
        size: 'large',
        duration: 250,
        animation: 'shift-toward'
    });
    tippy('#tippy-longcq', {
        content: "Các thông tin khuyến mãi từ MobiFone luôn được cập nhật ngay lập tức",
        theme: 'm090',
        arrow: true,
        arrowType: 'round',
        size: 'large',
        duration: 250,
        animation: 'shift-toward'
    });
    tippy('#tippy-lamncn', {
        content: "Đây là một số ít ứng dụng khiến tôi phải mở hàng ngày",
        showOnInit: true,
        theme: 'm090',
        arrow: true,
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