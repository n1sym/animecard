<script>
  export let tables
</script>

<table>
  <tbody>
    {#each tables as row}
      <tr>
        <td id="c1">{row.name}</td>
        <td>
          {row.title}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  #c1 {
    width: 60px;
  }
</style>