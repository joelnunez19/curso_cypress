import { LoginMethods } from "./pages/login/login.methods";

describe('',()=>{
it('login',()=>{
    cy.visit('https://www.demoblaze.com/');
    LoginMethods.clickLoginNavbar();
    cy.wait(1000)
    LoginMethods.SignIn('pablo123900','loron1234')
});
    
})