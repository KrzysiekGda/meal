<script lang="ts">
    
    // button wyświetlajacy danie
    import type { Dish } from '../state/dish';
	import { setDishPageActive } from '../stores/activePageStore';
 
    export let dish: Dish;

    function showDishPage() {
		setDishPageActive(dish);
    }

</script>

<button on:click={showDishPage}>
    {dish.name}
</button>
