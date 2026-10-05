const { Builder, By } = require("selenium-webdriver");

async function signupTest() {

    const driver = await new Builder()
        .forBrowser("chrome")
        .build();
     
    // Website open
    await driver.get("https://thanigai.space");

    // Click on Signup button
    await driver
        .findElement(By.css(".signup-btn"))
        .click();

    //wait for the signup form
       
    await driver.wait(
            until.elementLocated(By.id("signupForm")),
            5000
        );  

    //  Enter Name
    await driver
        .findElement(By.id("signupName"))
        .sendKeys("kamali");

    //  Enter Email
    await driver
        .findElement(By.id("signupEmail"))
        .sendKeys("kamali123@gmail.com");

    // Password
    await driver
        .findElement(By.id("signupPassword"))
        .sendKeys("12345");

    // Signup button/Ctreate Account button
    await driver
        .findElement(By.css(".primary-btn"))
        .click();

    //=========Wait for Login page ======

        await driver.wait(
            until.elementLocated(By.id("loginForm")),
            5000
        );

        // Enter Email

        await driver.findElement(By.id("loginEmail"))
        .sendKeys("kamali123@gmail.com");

        // Enter Password

        await driver.findElement(By.id("loginPassword"))
        .sendKeys("12345");

        await driver.findElement(By.css(".primary-btn"))
        .click();   

        await driver.wait(until.elementLocated(By.id("showHome")), 5000);

         console.log(" Signup successful");
        console.log(" Login successful");
        console.log(" Home page opened");

}



signupTest();