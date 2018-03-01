'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {
    it('should automatically redirect to /quiz-view when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/quiz-view");
    });

    describe('quiz-view', function () {
        beforeEach(function () {
            browser.get('index.html#!/quiz-view');
        });

        it('should render quiz-view when user navigates to /quiz-view', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/partial for quiz-view/);
        });

    });
});
