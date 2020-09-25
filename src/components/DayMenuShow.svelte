<script lang="ts">
    
    // wyświetlenie posiłku dla danego menu
    import type { DayMenu } from '../state/dayMenu';
    import MealMenuShow     from '../components/MealMenuShow.svelte';
    import MealMenuEdit     from '../components/MealMenuEdit.svelte';

    export let dayMenu: DayMenu;

    function toggle() {
		dayMenu.showMode = !dayMenu.showMode;
    }
    
</script>

<div>
    <!--pokazuje dane menu na dzień -->
    <button on:click={toggle}>
        {dayMenu.day}
    </button> 
    <!--posiłki dnia -->
    <ul>
        {#each dayMenu.meals as meal}
            <li>
               {#if dayMenu.showMode}  
                 <MealMenuShow {meal} />
                {:else}
                   <MealMenuEdit {meal} />
               {/if}
            </li>    
        {/each}           
    </ul>
</div>

