import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/world";

Before(async function (this: CustomWorld) {
  await this.init(); // Inisialisasi browser & page object
});

After(async function (this: CustomWorld) {
  await this.cleanup(); // Cleanup browser
});

Given("User membuka halaman utama Clio", async function (this: CustomWorld) {
  await this.homePage.open();
});

When('User klik tombol "Try Clio Free"', async function (this: CustomWorld) {
  await this.homePage.clickbuttonTryClioFree();
});

When(
  "User mengisi field First Name dengan {string}",
  async function (this: CustomWorld, firstName: string) {
    await this.signupPage.fillfieldFirstName(firstName);
  }
);

When(
  "User mengisi field Last Name dengan {string}",
  async function (this: CustomWorld, lastName: string) {
    await this.signupPage.fillfieldLastName(lastName);
  }
);

When(
  "User mengisi field Email dengan {string}",
  async function (this: CustomWorld, email: string) {
    await this.signupPage.fillfieldEmail(email);
  }
);

When(
  "User mengisi field Phone Number dengan {string}",
  async function (this: CustomWorld, phone: string) {
    await this.signupPage.fillfieldPhoneNumber(phone);
  }
);

When("User memilih Firm Size", async function (this: CustomWorld) {
  await this.signupPage.fillfieldFirmSize();
});

When('User klik tombol "Get Started"', async function (this: CustomWorld) {
  await this.signupPage.clickbuttonGetStarted();
});

Then("User menunggu selama 2 detik", async function (this: CustomWorld) {
  await this.page.waitForTimeout(2000);
});
