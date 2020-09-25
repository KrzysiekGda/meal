<script lang="ts">
    
    // wyświetlenie posiłku w menu dla danego dnia
    import type { Meal } from '../state/meal';
    import DishButton from '../components/DishButton.svelte';

    export let meal: Meal;

</script>

<div>
    <button>
        {meal.kind}: dodaj
    </button>
    <ul>
        {#each meal.dishes as dish}
            <li>
                <DishButton {dish}/>
                <button>
                    usuń
                </button>
             </li>
        {/each}
   </ul>           
</div>