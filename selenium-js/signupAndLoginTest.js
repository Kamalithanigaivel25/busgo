import{Builder ,By ,until} from "selenium-webdriver";
import { searchBus } from "./searchTest.js";

async function signupAndLogin( i) {


    const name = `kamali${i}`;
    const email = `kamali${i}@gmail.com`;
    const password = "12345";

    const driver = await new Builder()
    .forBrowser("chrome")
    .build();


    //website open

    await driver.get("https://thanigai.space");

    //signup button click
     
    await driver.findElement(By.css(".primary-btn")).click();

    //wait for signup form to be visible
    await driver.wait(
        until.elementLocated(By.id("signupForm")),
        50000
    );

    //fill the signup form

    await driver.findElement(By.id("signupName")).sendKeys(name);
    await driver.findElement(By.id("signupEmail")).sendKeys(email);
    await driver.findElement(By.id("signupPassword")).sendKeys(password);

    //submit the signup form
    await driver.findElement(By.css(".primary-btn")).click();

    //wait for login form to be visible
    await driver.wait(
        until.elementLocated(By.id("loginForm")),
        50000
    );

    //fill the login form

    await driver.findElement(By.id("loginEmail")).sendKeys(email);
    await driver.findElement(By.id("loginPassword")).sendKeys(password);

    //submit the login form

    await driver.findElement(By.css(".primary-btn")).click();

    console.log(`\n     ==================`);

    console.log(`             LOOP ${i}`);

    console.log(`Signup and login successful for user: ${name}`);


    await searchBus(driver);

}


async function test() 
{
try
    {
        for(let i = 1; i <= 5; i++)
        {
        await signupAndLogin(i) ;

        }
    }catch(err){
        console.log(err);

    }
}
  
test();



