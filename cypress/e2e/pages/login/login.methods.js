import { use } from "chai";
import { LoginElements_SignIn } from "./login.elements";

export class LoginMethods{
    static clickLoginNavbar(){
        LoginElements_SignIn.navbar_LogIn.btnLogin.click()
    };

    static  insertUsername(username){
       LoginElements_SignIn.textboxes.username.type(username)
    };

    static insertPassword(password){
        LoginElements_SignIn.textboxes.password.type(password);
    };

    static clickLogin(){
        LoginElements_SignIn.button.signUp.click();
    };

    static clickClose(){
        LoginElements_SignIn.button.close.click();
    };
    
    static SignIn(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickLogin()
    }
   
};