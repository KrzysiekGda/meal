<script lang="ts">
	// BookPage
    import { setMainPageActive } from '../stores/activePageStore';
</script>

<div>
	<h1>BookPage.</h1>
	<h2>Książka kucharska.</h2>
	<button on:click={() => setMainPageActive()}>Set MainPage</button>
</div>
