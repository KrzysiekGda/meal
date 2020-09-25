import { writable    } from 'svelte/store';
import type { DayMenu  } from '../state/dayMenu';

// inicjalizacja do testów
const initMenu: DayMenu[] = [
    {
        day: '2020-09-23',
        meals: [
            {
                kind: 'śniadanie',
                dishes: [
                    {
                        id: 1,
                        name: 'jajecznica',
                        ingredients: [{name: 'jaja',   quantity:   3, measure: 'sztuka'},
                                      {name: 'boczek', quantity: 100, measure: 'gram'  }, 
                                      {name: 'cebula', quantity:   1, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie jajecznicy'
                    }
                ]    
            },
            {
                kind: 'obiad',
                dishes: [
                    {
                        id: 2,
                        name: 'pomidorowa',
                        ingredients: [{name: 'pomidory', quantity:   5, measure: 'sztuka'},
                                      {name: 'kurczak',  quantity: 0.5, measure: 'sztuka'}, 
                                      {name: 'cebula',   quantity:   1, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie pomidorowej'
                    },
                    {
                        id: 3,
                        name: 'schabowy',
                        ingredients: [{name: 'schab',     quantity: 200, measure: 'gram'},
                                      {name: 'ziemniaki', quantity: 500, measure: 'gram'}, 
                                      {name: 'kapusta',   quantity: 0.5, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie schabowego'
                    },
                    {
                        id: 4,
                        name: 'kompot wiśniowy',
                        ingredients: [{name: 'wiśnie',    quantity: 500, measure: 'gram'},
                                      {name: 'cukier',    quantity:  50, measure: 'gram'}, 
                                      {name: 'cytryna',   quantity: 0.5, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie kompotu wiśniowego'
                    }
                ]       
            },
            {
                kind: 'kolacja',
                dishes: [
                    {
                        id: 5,
                        name: 'naleśniki',
                        ingredients: [{name: 'jaja',   quantity:   3, measure: 'sztuka'},
                                      {name: 'boczek', quantity: 100, measure: 'gram'  }, 
                                      {name: 'mąka',   quantity: 300, measure: 'gram'  } 
                        ],  
                        recipe: 'przepis na gotowanie naleśników'
                    }
                ]    
            },
        ],
        showMode: true
    },
    {
        day: '2020-09-24',
        meals: [
            {
                kind: 'śniadanie',
                dishes: [
                    {
                        id: 6,
                        name: 'jajecznica',
                        ingredients: [{name: 'jaja',   quantity:   3, measure: 'sztuka'},
                                      {name: 'boczek', quantity: 100, measure: 'gram'  }, 
                                      {name: 'cebula', quantity:   1, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie jajecznicy'
                    }
                ]    
            },
            {
                kind: 'obiad',
                dishes: [
                    {
                        id: 7,
                        name: 'żurek',
                        ingredients: [{name: 'pomidory', quantity:   5, measure: 'sztuka'},
                                      {name: 'kurczak',  quantity: 0.5, measure: 'sztuka'}, 
                                      {name: 'cebula',   quantity:   1, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie żurku'
                    },
                    {
                        id: 8,
                        name: 'gulasz',
                        ingredients: [{name: 'mięso',     quantity: 200, measure: 'gram'},
                                      {name: 'ziemniaki', quantity: 500, measure: 'gram'}, 
                                      {name: 'kapusta',   quantity: 0.5, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie gulaszu'
                    },
                    {
                        id: 9,
                        name: 'kompot malinowy',
                        ingredients: [{name: 'maliny',    quantity: 500, measure: 'gram'},
                                      {name: 'cukier',    quantity:  50, measure: 'gram'}, 
                                      {name: 'cytryna',   quantity: 0.5, measure: 'sztuka'} 
                        ],  
                        recipe: 'przepis na gotowanie kompotu malinowego'
                    }
                ]    
            },
            {
                kind: 'kolacja',
                dishes: [
                    {
                        id: 10,
                        name: 'placki ziemniaczane',
                        ingredients: [{name: 'ziemniaki', quantity: 500, measure: 'gram'},
                                      {name: 'boczek',    quantity: 100, measure: 'gram'}, 
                                      {name: 'mąka',      quantity: 300, measure: 'gram'} 
                        ],  
                        recipe: 'przepis na gotowanie placków ziemniaczanych'
                    }
                ]    
            },
        ],
        showMode: true
    }
]

// menu w okresie         
export const menuStore = writable<DayMenu[]>(initMenu);