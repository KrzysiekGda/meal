<script lang="ts">
    
	// wyświetlenie menu
	import { menuStore } from '../stores/menuStore';
    import DayMenuShow  from '../components/DayMenuShow.svelte'
    
	let dtOd: string = '2020-09-23';
	let dtDo: string = '';

</script>

<div>
    <label>
        Od dnia
        <input bind:value={dtOd}>
        Do dnia
        <input bind:value={dtDo}>		
    </label>
    <button>Filtruj</button>
</div>
<h2>Menu</h2>
{#each $menuStore as dayMenu}
    <DayMenuShow {dayMenu} />
{/each}   