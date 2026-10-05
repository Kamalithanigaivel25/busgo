const { Builder, By} = require("selenium-webdriver");

    async function loginTest() {

        const driver = await new Builder()
            .forBrowser("chrome")
            .build();   

    // Website open
    await driver.get("https://thanigai.space");
    
    await driver
        .findElement(By.css(".signup-btn"))
        .click();              

    // Email
    await driver
        .findElement(By.id("loginEmail"))
        .sendKeys("test123@gmail.com");

    // Password
    await driver
        .findElement(By.id("loginPassword"))
        .sendKeys("123456");

    // Login button
    await driver
        .findElement(By.css(".primary-btn"))
        .click();

        console.log("Login test completed successfully!");
        await driver.quit();

}

loginTest();