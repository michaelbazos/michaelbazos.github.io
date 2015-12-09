'use strict';

describe('The home view', function () {
    var page;

    beforeEach(function () {
        browser.get('/index.html');
        page = require('./home.po');
    });

    it('should include section about me with correct data', function () {
        expect(page.location.getText()).toBe('Paris, France');
    });
});
