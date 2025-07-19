import { test } from "../pageObjects/Base.page";

test.describe.serial("Login Page Hermes - Positive", () => {
  //   test.beforeEach(async ({ page, homePage }) => {
  //     await homePage.open();
  //   });

  test("User melakukan login menggunakan username", async ({
    page,
    homePage,
  }) => {
    await homePage.open();
    await page.waitForTimeout(2000);
  });
});
