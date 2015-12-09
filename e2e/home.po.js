/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var HomePage = function () {
    this.about = element(by.css('.about-me'));
    this.name = this.about.element(by.css('about-me__name'));
    this.roles = this.about.element(by.css('about-me__roles'));
    this.location = this.about.element(by.css('about-me__location'));
};

module.exports = new HomePage();
