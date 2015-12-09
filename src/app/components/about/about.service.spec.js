(function() {
    'use strict';

    describe('service aboutService', function() {
        var aboutService;

        beforeEach(module('website'));
        beforeEach(inject(function (_aboutService_) {
            aboutService = _aboutService_;
        }));

        it('should be registered', function () {
            expect(aboutService).not.toEqual(null);
        });

        describe('getInfos function', function () {
            it('should exist', function () {
                expect(aboutService.getInfos).not.toEqual(null);
            });
        });

        describe('getRoles function', function () {
            it('should exist', function () {
                expect(aboutService.getRoles).not.toEqual(null);
            });
        });
    });

})();
