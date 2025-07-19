import { test } from "../pageObjects/Base.page";

test.describe.serial("Home Page Clio - Positive", () => {
  //   test.beforeEach(async ({ page, homePage }) => {
  //     await homePage.open();
  //   });

  test.only("User melakukan akses ke Web Clio", async ({
    page,
    homePage,
    signupPage,
  }) => {
    await homePage.open();
    await homePage.clickbuttonTryClioFree();
    await signupPage.fillfieldFirstName("testttt");
    await signupPage.fillfieldLastName("Afriatesadasadnsyah");
    await signupPage.fillfieldEmail("rhamafahri123123@gmail.com");
    await signupPage.fillfieldPhoneNumber("0813139823232");
    await signupPage.fillfieldFirmSize();
    await signupPage.clickbuttonGetStarted();
    await page.waitForTimeout(2000);
    await page.pause();
  });
});
