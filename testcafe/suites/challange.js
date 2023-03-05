import { t } from 'testcafe';
import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';
import { loginFunc } from '../helpers/login';
import config from '../../config.json'
import home from '../pages/home'
import registration from '../pages/registration'
import profileP from '../pages/profile';
import friends from '../pages/friends';

const homePage = new home();
const regPage = new registration();
const profilePage = new profileP();
const friendsPage = new friends();

//randomly choose a user from config.json
const profile = config.users[Math.floor(Math.random() * config.users.length)]; 


fixture ('Synapbox testcafe challenge')
    .page`https://connect.example.com`;


test('Register new user', async t => {
    //navigate to registration page
    await t
        .click(homePage.regButton); 

    //type registration information and confirm new user
    await t
        .typeText(regPage.name, profile[2])
        .typeText(regPage.email, profile[0])
        .typeText(regPage.pass1, profile[1])
        .typeText(regPage.pass2, profile[1])
        .click(regPage.confirmButton);
    
    //confirm registration went successful
    await t
        .expect(regPage.confirmMessage).contains("Account created successfuly");
});

test('Login created user', async t => {
    //login to users profile
    await loginFunc(profile[0], profile[1], profile[2]);
});

test('Edit profile info', async t => {
    //login to users profile
    await loginFunc(profile[0], profile[1], profile[2]);

    //edit info and save
    await t
        .click(profilePage.editButton)
        .typeText(profilePage.emailField, "other@email.com")
        .typeText(profilePage.passField, "otherPass")
        .typeText(profilePage.nameField, "Other Person")
        .click(profilePage.saveButton);

    //confirm email change
    await t
        .expect(profilePage.emailTag).notEql(profile[0])
        .expect(profilePage.emailTag).eql("other@email.com")
    //confirm name change
        .expect(profilePage.nameTag).notEql(profile[2])
        .expect(profilePage.nameTag).eql("Other Person");
    
    //confirm password change
    await t
        .click(homePage.logoutButton)
        .wait(5000);
    await loginFunc("other@email.com", "otherPass", "Other Person");
});

test('Search friend and send request', async t => {
    //login to users profile
    await loginFunc(profile[0], profile[1], profile[2]);

    //navigate to friends page, search for user and send friend request
    await t
        .click(homePage.friendsModule)
        .typeText(friendsPage.searchFriends, "User b")
        .click(friendsPage.searchButton)
        .click(friendsPage.sendRequestButton);

    //validate friend request confirmation message
    await t
        .expect(friendsPage.confirmMessage).eql("Friend request sent successfuly");
});

test('Accept friend request', async t => {
    //login to users profile
    await loginFunc(profile[0], profile[1], profile[2]);

    //navigate to friends page and accept friend requests
    await emulateClipboard();
    await t
        .click(homePage.friendsModule)
        .click(friendsPage.friendRequests);
    //save new friend name
    const friend = Selector("#user-Tag").innerText
    await t
        .click(friendsPage.acceptButton);

    //validate new friend is at my friend list
    await t
        .click(friendsPage.myFriendsList)
        .expect(friendsPage.friendTag).eql(friend);
});