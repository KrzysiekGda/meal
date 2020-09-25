<script lang="ts">
    
    // wyświetlenie posiłku w menu dla danego dnia
    import type { Meal } from '../state/meal';
    import { MealDishesNames } from '../state/meal';

    export let meal: Meal;

</script>

<div>
    <p>{meal.kind}: {MealDishesNames(meal)}</p>
</div>