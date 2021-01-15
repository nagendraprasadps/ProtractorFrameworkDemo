let homepage=require('../pages/homepage');
let url="http://juliemr.github.io/protractor-demo/";
describe ('demo', function(){
    it ('add', function(){
        homepage.get(url);
        homepage.enterFirstNumber("3");
        homepage.enterSecondNumber('6');
        homepage.selectOperation('*');
        homepage.clickGo();
        homepage.verifyResult("18");
    });
     it ('subtract', function(){
        homepage.get(url);
        homepage.enterFirstNumber("180");
        homepage.enterSecondNumber('6');
        homepage.selectOperation('-');
        homepage.clickGo();
        homepage.verifyResult("174");
    });
     it ('mod', function(){
        homepage.get(url);
        homepage.enterFirstNumber("6");
        homepage.enterSecondNumber('6');
        homepage.selectOperation('%');
        homepage.clickGo();
        homepage.verifyResult("0");
    });
    it ('mod', function(){
        homepage.get(url);
        homepage.enterFirstNumber("6");
        homepage.enterSecondNumber('6');
        homepage.selectOperation('/');
        homepage.clickGo();
        homepage.verifyResult("1");
    });
});