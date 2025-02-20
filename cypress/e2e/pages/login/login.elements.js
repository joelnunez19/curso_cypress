export class LoginElements{
    static get navbar_login(){
        return{
            get btnLogin_navbar(){
              return cy.get('#login2')}              
        }}

    static get boxes(){
        return{
            get username(){
               return cy.get('input[type="text"]#loginusername');
            },
            get password(){
               return cy.get('input[type=password]#loginpassword')
            }
        }
    }

    static get button(){
        return{             // BUSCAR EN UN MODAL, SE BUSCA EL PADRE Y SE BUSCA DIRECTAMENTE dsp CON .FIND ooo
            get close(){    //  se pone el id del div, un espacio y  busca directamente dentro de los hijos
                return  cy.get('#logInModal button[type="button"]').contains('button','Close')
               //return cy.get('div[id="logInModal"]').should('be.visible').find('button[type="button"].btn.btn-secondary')
            },
            get Login(){
                return cy.get('#logInModal button[onclick="logIn()"]').contains('button','Log in')
            }
            
        }
    } //
}