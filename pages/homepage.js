//http://juliemr.github.io/protractor-demo/
let homepage= function(){
    let first_input=element(by.model('first'));
    let second_input=element(by.model('second'));
    let goButton = element(by.css('[ng-click ="doAddition()"]'));
    let operation = element(by.css('.span1'));
    let output=element(by.xpath('/html/body/div/div/form/h2'));

    this.get =function(url){
        browser.get(url);
    };
    this.selectOperation =function(op){
        operation.sendKeys( op);
    };
    this.enterFirstNumber =function(firstNo){
        first_input.sendKeys(firstNo);
    };

    
    this.enterSecondNumber =function(secondNo){
        second_input.sendKeys(secondNo);
    };
    this.clickGo= function(){
            goButton.click();
    };
    this.verifyResult=function(result){
            expect(output.getText()).toEqual(result);

    };
};

module.exports = new homepage();