import type { Meal } from './meal'

// dzienne menu
export interface DayMenu {
    day: string,       // menu na dzień
    meals: Meal[],     // posiłki w dniu
    showMode: boolean  // true: view, false: edit
}