import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { HomePage } from "../pageObjects/Home.page";
import { SignupPage } from "../pageObjects/Signup.page";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  homePage!: HomePage;
  signupPage!: SignupPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();

    // Mirip seperti test.extend
    this.homePage = new HomePage(this.page);
    this.signupPage = new SignupPage(this.page);
  }

  async cleanup() {
    await this.page.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
