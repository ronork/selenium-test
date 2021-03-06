
/*To test if the links open in search result */
var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Page Link Check', function() {
  this.timeout(16000);
  test.it('Links are correct', function(done){
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('Wikipedia');
    driver.findElement(webdriver.By.name('btnK')).click();
    driver.sleep(2000);
    driver.findElement(webdriver.By.linkText('Wikipedia, the free encyclopedia')).click();
    driver.sleep(1000);

    driver.getTitle().then(function(title){
    if(title === "Wikipedia, the free encyclopedia")
       done();
     else
      done(new Error("Required Page did not open"));
    });

   // driver.quit();

  });
});