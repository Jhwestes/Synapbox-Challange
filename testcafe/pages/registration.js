import { Selector } from 'testcafe';

class registration{

        //locators for registration page
        name= Selector("#name-field");
        email= Selector("#email-field");
        pass1= Selector("#password-field");
        pass2= Selector("#password-repeat-field");
        confirmButton= Selector('button').withExactText('Confirm');
        confirmMessage= Selector("#message-box");

        }

export default registration