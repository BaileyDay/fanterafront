<script>
  import { onMount } from 'svelte';
  import { getPageBySlug } from '../services/api';

  let pageData;
  let isLoading = true;
  let slug = 'home'; // Example slug

  onMount(async () => {
    try {
      const response = await getPageBySlug(slug);
      if (response.docs && response.docs.length > 0) {
        pageData = response.docs[0];
      }
    } catch (error) {
      console.error('Error fetching page:', error);
    } finally {
      isLoading = false;
    }
  });
</script>

{#if isLoading}
  <h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
{:else if pageData}
  <h1>{pageData.title}</h1>

{/if}