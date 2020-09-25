// składnik potrawy
export interface Ingredient {
    name: string,        // nazwa składnika
    quantity: number,    // ilość
    measure: string      // miara: sztuki, gramy, kg, litry, ...
}

// potrawa
export interface Dish {
    id: number,                  // wewnętrzny identyfikator potrawy
    name: string,                // nazwa potrawy
    ingredients: Ingredient[],   // składniki potrzebne do przygotowania potrawy
    recipe: string               // przepis na przygotowanie potrawy
}
