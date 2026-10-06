const {Builder, By} = require("selenium-webdriver");

async function searchBus(source, destination, date) {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    // Open the website
    await driver.get("https://thanigai.space");

    // Enter source
    await driver.findElement(By.id("from")).sendKeys(source); 

    // Enter destination

    await driver.findElement(By.id("to")).sendKeys(destination);

    // Enter date
    await driver.findElement(By.id("travelDate")).sendKeys(date);         

    // Click search button


    await driver.findElement(By.id("searchButton")).click();   


    // Wait for search results to load
    await driver.sleep(5000); // Adjust the wait time as needed     

    await driver.wait(until.elementLocated(By.id("busResults")), 
    10000);

    console.log(`Bus search completed for ${source} to ${destination} on ${date}`);

    await driver.quit();

}


 searchBus("Chennai", "Bangalore", "2026-10-10");
