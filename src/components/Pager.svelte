<script lang="ts">
    // wyświetlenie strony, której identyfikator przechowywany jest
    // activePageStore
    import { cMainPage,
             cAboutPage,
             cDishPage,
             cBookPage,
             cShopPage    } from '../def';
    import   MainPage       from '../pages/MainPage.svelte';
    import   AboutPage      from '../pages/AboutPage.svelte';
    import   ErrorPage      from '../pages/ErrorPage.svelte';
    import   DishPage       from '../pages/DishPage.svelte';
    import   BookPage       from '../pages/BookPage.svelte';
    import   ShopPage       from '../pages/ShopPage.svelte';
    import { activePage   } from '../stores/activePageStore';

</script>

{#if $activePage.page === cMainPage}
	<MainPage/>
{:else if $activePage.page === cAboutPage}
    <AboutPage/>
{:else if $activePage.page === cBookPage}
    <BookPage/>
{:else if $activePage.page === cShopPage}
    <ShopPage/>
{:else if $activePage.page === cDishPage}
    <DishPage dish={$activePage.dish}/>
{:else}
    <ErrorPage/>
{/if}
