export class elementsHome{
    static get categoriesMenu(){
        return{
            get phone(){
                cy.get('#itemc').contains('a','Phones');
            },
            get laptops(){
                cy.get('#itemc').contains('a','Laptops');
            },
            get monitors(){
                cy.get('#itemc').contains('a','Monitors');
            }
        }}
    
    static product(producto){
        return cy.contains('a',producto)
    }
}