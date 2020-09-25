<script lang="ts">

	// ShopPage
    import { setMainPageActive } from '../stores/activePageStore';

</script>

<div>
	<h1>ShopPage.</h1>
	<h2>Obsługa list zakupów.</h2>
	<button on:click={() => setMainPageActive()}>Set MainPage</button>
</div>
