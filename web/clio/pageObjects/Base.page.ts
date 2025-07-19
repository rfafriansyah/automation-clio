import { test as base } from "@playwright/test";
import { HomePage } from "./Home.page";
import { SignupPage } from "./Signup.page";

type MyFixtures = {
  homePage: HomePage;
  signupPage: SignupPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
});

export { expect } from "@playwright/test";
