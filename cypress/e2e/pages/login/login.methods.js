import { LoginElements } from "./login.elements";

export class loginMethods{
    static  click_navBarLogin(){
       LoginElements.navbar_login.btnLogin_navbar.click()   
    }
    static inputUsername(username){
        LoginElements.boxes.username.click().type(username)
    }
    static inputPassword(password){
        LoginElements.boxes.password.click().type(password)
    }
    static get clickLogin(){
        LoginElements.button.Login.click()
    }
    static login(username,password){
        this.click_navBarLogin()
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin
    }
    

}