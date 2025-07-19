import { Locator, Page, expect } from "@playwright/test";

export class SignupPage {
  readonly page: Page;
  readonly fieldFirstName: Locator;
  readonly fieldLastName: Locator;
  readonly fieldEmail: Locator;
  readonly fieldPhoneNumber: Locator;
  readonly fieldFirmSize: Locator;
  readonly buttonGetStarted: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fieldFirstName = page.getByRole("textbox", { name: "First name" });
    this.fieldLastName = page.getByRole("textbox", { name: "Last name" });
    this.fieldEmail = page.getByRole("textbox", { name: "Email" });
    this.fieldPhoneNumber = page.getByRole("textbox", { name: "Phone number" });
    this.fieldFirmSize = page.getByLabel("Firm size");
    this.buttonGetStarted = page.getByRole("button", { name: "Get Started" });
  }

  async open() {
    await this.page.goto("");
  }

  async fillfieldFirstName(firstname: any) {
    await this.fieldFirstName.fill(firstname);
  }

  async fillfieldLastName(lastName: any) {
    await this.fieldLastName.fill(lastName);
  }

  async fillfieldEmail(email: any) {
    await this.fieldEmail.fill(email);
  }

  async fillfieldPhoneNumber(phoneNumber: any) {
    await this.fieldPhoneNumber.fill(phoneNumber);
  }

  async fillfieldFirmSize() {
    await this.page.getByLabel("Firm size").selectOption("2 to 4");
  }

  async clickbuttonGetStarted() {
    await this.buttonGetStarted.click();
  }
}
