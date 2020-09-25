<script lang="ts">

	// MainPage
	import { setAboutPageActive,
			 setBookPageActive,
			 setShopPageActive   } from '../stores/activePageStore';
	import MenuShow  from '../components/MenuShow.svelte'

</script>

<div>
	<h1>MainPage.</h1>
	<button on:click={() => setBookPageActive()}>Set BookPage</button>
	<button on:click={() => setShopPageActive()}>Set ShopPage</button>
	<button on:click={() => setAboutPageActive()}>Set AboutPage</button>
	<MenuShow/>
</div>


