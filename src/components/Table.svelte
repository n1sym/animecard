<script>
  export let tables
</script>

<table>
  <tbody>
    {#each tables as row}
      <tr>
        <td id="c1">{row.name}</td>
        <td>
          {#if row.title == ""}
            {"-"}
          {:else}
            {row.title}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>

</style>