import { ClientFunction } from 'testcafe';
import home from '../pages/home'
import login from '../pages/login'

const homePage = new home();
const loginPage = new login();

/**
 * Logs into users profile.
 * @param {String} email - Profile email
 * @param {String} password - Profile password
 * @param {String} name - User name
 */
export async function loginFunc(email, password, name) {
    //navigate to login page
    await t
        .click(homePage.loginButton);
        
    //type credentials and login
    await t
        .typeText(loginPage.email, email)
        .typeText(loginPage.pass, password)
        .click(loginPage.loginButton);

    //get URL
    const getPageUrl = ClientFunction(() => window.location.href);

    //confirm user is redirected to profile page
    await t
        .expect(Selector("#page-header").innerText).contains(name)
        .expect(getPageUrl).contains("profile");
}