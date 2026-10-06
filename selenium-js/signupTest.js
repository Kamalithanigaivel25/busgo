const { Builder, By , until} = require("selenium-webdriver");

async function signupTest() {

    const driver = await new Builder()
        .forBrowser("chrome")
        .build();
        
try
{
    for (let i = 0; i <= 5; i++) {

    //Dynamic email generation
        const email = `kamali${i}@gmail.com`;
        console.log("using email:",email);
     
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
        .sendKeys("kamali${i}");

    //  Enter Email
    await driver
        .findElement(By.id("signupEmail"))
        .sendKeys("email");

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

        

        console.log(" Signup successful");
        console.log(" Login successful");
    }

}
catch (error) {
    console.error(error);
}
finally {
    await driver.quit();    
    }

}

signupTest();