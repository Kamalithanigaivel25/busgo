
import { By, until} from  "selenium-webdriver" ;
 

export async function searchBus(driver) {

    const from = "Chennai";
    const to = "Bangalore";
    const date = "2026-10-10";
    //console.log("hellooo");


    await driver.findElement(By.id("homeSearchBtn")).click();   
   
    // Enter source
    await driver.findElement(By.id("from")).sendKeys(from); 

    // Enter destination

    await driver.findElement(By.id("to")).sendKeys(to);

    // Enter date
    await driver.findElement(By.id("travelDate")).sendKeys(date);         

    // Click search button


    await driver.findElement(By.id("searchButton")).click();   


    // Wait for search results to load
    //await driver.sleep(5000); // Adjust the wait time as needed     

    await driver.wait(until.elementLocated(By.id("busResults")), 
    10000);

    console.log(`Bus search completed for ${from} to ${to} on ${date}`);

    console.log(`     ===================`);

    await driver.quit();

}

    

