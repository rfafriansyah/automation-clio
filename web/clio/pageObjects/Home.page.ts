import { Locator, Page, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly buttonTryClioFree: Locator;
  readonly buttonLogin: Locator;
  readonly buttonClioGrow: Locator;
  readonly buttonClioManage: Locator;
  readonly fieldEmail: Locator;
  readonly buttonNextPassword: Locator;
  readonly fieldPassword: Locator;
  readonly buttonSignin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonTryClioFree = page.getByLabel("Try Clio for Free", {
      exact: true,
    });
    this.buttonLogin = page.getByRole("link", { name: "Login " });
    this.buttonClioGrow = page.getByRole("link", {
      name: "Sign in to Clio Grow",
    });
    this.buttonClioManage = page.getByRole("link", {
      name: "Sign in to Clio Manage",
    });
    this.fieldEmail = page.getByRole("textbox", { name: "Email" });
    this.buttonNextPassword = page.getByRole("button", {
      name: "Next: Password",
    });
    this.fieldPassword = page.getByRole("textbox", { name: "Password" });
    this.buttonSignin = page.getByRole("button", { name: "Sign In" });
  }

  async open() {
    await this.page.goto("");
  }

  async clickbuttonTryClioFree() {
    await this.buttonTryClioFree.click();
  }

  async clickbuttonLogin() {
    await this.buttonLogin.click();
  }

  async clickbuttonClioGrow() {
    await this.buttonClioGrow.click();
  }

  async clickbuttonClioManage() {
    await this.buttonClioManage.click();
  }

  async fillfieldEmail(email: any) {
    await this.fieldEmail.fill(email);
  }

  async clickbuttonNextPassword() {
    await this.buttonNextPassword.click();
  }

  async fillfieldPassword(password: any) {
    await this.fieldPassword.fill(password);
  }

  async clickbuttonSignin() {
    await this.buttonSignin.click();
  }
}
