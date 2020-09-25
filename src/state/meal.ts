import type { Dish } from './dish'

// posiłek
export interface Meal {
    kind: string,     // sniadanie, obiad, kolacja, .....
    dishes: Dish[]    // dania wchodzące w sklad posiłku
}

export const MealDishesNames = (meal: Meal): string => {
    let s: string = '';
    for (let dish of meal.dishes) {
        if (s !== '')
            s += ', '
        s += dish.name;    
    }    
    return s;
}