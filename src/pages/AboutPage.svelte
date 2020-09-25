<script lang="ts">
	// AboutPage
    import { setMainPageActive } from '../stores/activePageStore';
</script>

<div>
	<h1>AboutPage.</h1>
	<h2>Zarządzanie posiłkami (wersja 1.0).</h2>
	<button on:click={() => setMainPageActive()}>Set MainPage</button>
</div>
