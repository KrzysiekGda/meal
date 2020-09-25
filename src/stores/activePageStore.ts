import type { Dish   } from '../state/dish';
import { writable    } from 'svelte/store';
import { cMainPage,
         cAboutPage,
         cErrorPage,
         cDishPage,
         cBookPage,
         cShopPage   } from '../def';


interface IActivePage {
    page: string,
    dish: Dish | null
}

// zawiera identyfikator wyświetlanej strony
// domyślnie: MainPage         
export const activePage = writable<IActivePage>({page: cMainPage, dish: null});

// wyświetlenie nowej strony
function setActivePage(newPage: string) {
    activePage.update(state => {
                                   let newState = {...state, page: newPage};
                                   return newState;
                               });
}

// przejście do MainPage
export const setMainPageActive = (): void => {
    setActivePage(cMainPage);
}

// przejście do AboutPage
export const setAboutPageActive = (): void => {
    setActivePage(cAboutPage);
}

// przejście do BookPage
export const setBookPageActive = (): void => {
    setActivePage(cBookPage);
}

// przejście do ShopPage
export const setShopPageActive = (): void => {
    setActivePage(cShopPage);
}

// przejście do ErrorPage
export const setErrorPageActive = (): void => {
    setActivePage(cErrorPage);
}

// przejście do DishPage
export const setDishPageActive = (newDish: Dish): void => {
    setActivePage(cDishPage);
    activePage.update(state => {
        let newState = {...state, page: cDishPage, dish: newDish};
        return newState;
    });
}    
