
/*To check Google Search Page Title*/
var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Page Title Check', function() {
  this.timeout(15000);
  test.it('Page Title', function(done){
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('Ronork');
    driver.findElement(webdriver.By.name('btnK')).click();
    driver.sleep(5000);

    driver.getTitle().then(function(title){
    if(title === "Ronork - Google Search")
       done();
     else
      done(new Error("Page tite is incorrect"));
    });

   // driver.quit();

  });
});