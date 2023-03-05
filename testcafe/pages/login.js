import { Selector } from 'testcafe';

class login{

        //locators for login page
        email= Selector("#email-field");
        pass= Selector("#password-field");
        loginButton= Selector('button').withExactText('Login');
        
        }

export default login