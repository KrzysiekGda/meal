<script lang="ts">

	// DishPage
    import type { Dish } from '../state/dish';
	import { setMainPageActive } from '../stores/activePageStore';

    export let dish: Dish;
    let showMode: boolean = true;
    
    function toggle() {
		showMode = !showMode;
    }</script>

<style>
	textarea { width: 100%; height: 200px; }
</style>

<div>
	<h1>DishPage</h1>
	<button on:click={() => setMainPageActive()}>Set MainPage</button>
	<h2>Potrawa: {dish.name}</h2>
	<h3>Potrzebne składniki:</h3>
    <ul>
        {#each dish.ingredients as ingredient}
            <li>
                {ingredient.name}, {ingredient.quantity} {ingredient.measure}
                {#if !showMode}
                    <button>usuń</button>
                {/if}
            </li>
        {/each}
    </ul>  
    <h3>Przepis:</h3>
    {#if showMode }
        <textarea bind:value={dish.recipe} readonly></textarea>
    {:else}   
        <textarea bind:value={dish.recipe}></textarea>
    {/if}
    <button on:click={toggle}>{showMode?'Edit':'Save'}</button>
</div>

