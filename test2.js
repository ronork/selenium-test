
/*To check if the searched value is the same as what is enterd by the user*/
var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Search', function() {
  test.it('Its working', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('Ronork');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'Ronork');
    });
   // driver.quit();
  });
});