<script lang="ts">
	// ErrorPage
	import { setMainPageActive } from '../stores/activePageStore';
</script>

<div>
	<h1>ErrorPage.</h1>
	<button on:click={() => setMainPageActive()}>Set MainPage</button>
</div>

