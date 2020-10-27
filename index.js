"use strict";

// Desktop browsers list.
const desktop = [
    "last 2 Chrome major versions",
    "last 2 Firefox major versions",
    "last 2 Safari major versions",
    "last 2 Edge major versions"
];

// Mobile browsers list.
const mobile = [
    "last 2 ChromeAndroid major versions",
    "last 2 iOS major versions"
];

// Combined list.
const browsers = desktop.concat(mobile);

module.exports = browsers;
