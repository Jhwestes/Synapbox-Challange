import { Selector } from 'testcafe';

class home{

        //locators for home page
        regButton= Selector('button').withExactText('Register');
        loginButton= Selector('button').withExactText('Login');
        logoutButton= Selector('button').withExactText('Logout');
        friendsModule= Selector("#friends-module");
        
        }

export default home