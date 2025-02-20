import { use } from "chai";
import { LoginElements_SignIn } from "./signIn.elements"
export class SignInMethods{
    static clickLoginNavbar(){
        LoginElements_SignIn.navbar_SigIn.btnSigIn.click()
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
        this.clickLoginNavbar()
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickLogin()
    }
   
};