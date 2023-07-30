const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("choices")), 5000); 
    const choicesDiv = await driver.findElement(By.id("choices"));
    expect(await choicesDiv.isDisplayed()).toBe(true);
  });
  test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.className("bot-btn")), 5000); // Wait up to 5 seconds for the "Add to Duo" buttons to appear
    // Let's assume we select the first bot to add to the player's duo
    const addToDuoButtons = await driver.findElements(By.className("bot-btn"));
    await addToDuoButtons[0].click();
    await driver.wait(until.elementLocated(By.id("player-duo")), 5000); // Wait up to 5 seconds for the "player-duo" div to appear
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    expect(await playerDuoDiv.isDisplayed()).toBe(true);
  });
  
});