'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render view1 when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for home/);
    });

  });


  describe('apprendre', function() {

    beforeEach(function() {
      browser.get('index.html#!/apprendre');
    });


    it('should render view2 when user navigates to /apprendre', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for apprendre/);
    });

  });
});
