import { elementsHome } from "./home.elements";

export class homeMethods{
    static get clickCategoriesPhones(){
        elementsHome.categoriesMenu.phone.click();
    };
    static get clickCategoriesLaptops(){
        elementsHome.categoriesMenu.laptops.click();
    };
    static get clickCategoriesMonitors(){
        elementsHome.categoriesMenu.monitors.click()
    };
    static clickLinkProduct(producto){
        elementsHome.product(producto).click()
    }
}