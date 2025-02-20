export class LoginElements_SignIn {
    static get navbar_SigIn(){
        return{
            get btnSigIn(){
                return cy.get('#signin2')
            }
        }
    }
    static get textboxes(){
        return{
            get username(){
                return cy.get('input[type="text"]#sign-username');
            },
            get password(){
                return cy.get('input[type="password"]#sign-password').click()
            }
        }
    }
    static get button(){
       return {
        get signUp(){
            return cy.get('button[type="button"][onclick="register()"]');
        },
        get close(){
            return cy.contains('button','Close').should('be.visible');
        }
    }}
}