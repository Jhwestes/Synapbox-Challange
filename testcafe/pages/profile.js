import { Selector } from 'testcafe';

class profileP{

        //locators for profile page
        title= Selector("#title-profile");
        nameTag= Selector("#email-label");
        emailTag= Selector("#name-label");
        nameField= Selector("#name-field");
        emailField= Selector("#email-field");
        passField= Selector("#password-field");
        editButton= Selector('button').withExactText('Edit');
        saveButton= Selector('button').withExactText('Save');
        
        }

export default profileP