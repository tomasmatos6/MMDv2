driver.get(BASE_URL + "resources");
wait = new WebDriverWait(driver, Duration.ofSeconds(15));
var editButton = wait.until(
    ExpectedConditions.visibilityOfElementLocated(
        By.id("resources-edit-button"))
);
editButton.click();
var eIdField = wait.until(
    ExpectedConditions.visibilityOfElementLocated(
        By.id("resource-info-eid"))
);
eIdField.click();
var eIdValue = env.getProperty("EID_INPUT");
eIdField.sendKeys(eIdValue);