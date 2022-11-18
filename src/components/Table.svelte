<script>
  export let tables;
  export let name;
</script>

{#if tables == ""}
  <p>レコードが見つかりません</p>
{:else}
  <p>{name} さんの好きなアニメ</p>
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
{/if}