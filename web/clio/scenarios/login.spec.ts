import { test } from "../pageObjects/Base.page";

test.describe.serial("Login Page Clio - Positive", () => {
  //   test.beforeEach(async ({ page, homePage }) => {
  //     await homePage.open();
  //   });

  test("User melakukan Login ke Web Clio", async ({
    page,
    homePage,
    signupPage,
  }) => {
    await homePage.open();
    await homePage.clickbuttonLogin();
    await homePage.clickbuttonClioManage();
    await homePage.fillfieldEmail("rhamafahri888@gmail.com");
    await homePage.clickbuttonNextPassword();
    await homePage.fillfieldPassword("Rhama@123");

    const captchaToken =
      "d3OXgbmdW1oNY4T8QLr29lM6eIL158jGvUpvSiZjE-TQOSOXU-xJv7GyZp5q-PU0Qe9FmoeQp70ACFGmaaPvcg";

    // Inject token ke elemen yang sesuai
    await page.evaluate((token) => {
      const recaptchaResponse = document.createElement("textarea");
      recaptchaResponse.id = "g-recaptcha-response";
      recaptchaResponse.name = "g-recaptcha-response";
      recaptchaResponse.style.display = "none";
      recaptchaResponse.innerHTML = token;
      document.body.appendChild(recaptchaResponse);
    }, captchaToken);

    await homePage.clickbuttonSignin();
    await page.waitForTimeout(10000);
    await page.pause();
  });
});
