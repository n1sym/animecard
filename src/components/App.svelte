<script>
  let tables = [{ id: 1, name: "2022夏", title: "" }];

  const SERASONS = ["春", "夏", "秋", "冬"];
  const SEASON_KEYS = { 春: 3, 夏: 0, 秋: 1, 冬: 2 };

  function composeSeasonName(season_name) {
    const season = season_name[season_name.length - 1];
    let year = parseInt(season_name);
    const key = SEASON_KEYS[season];
    if (season == "冬") {
      year -= 1;
    }
    return year.toString() + SERASONS[key];
  }

  function handleAddClick() {
    const last_row = tables[tables.length - 1];
    const id = last_row.id + 1;
    const name = composeSeasonName(last_row.name);
    tables = tables.concat({ id: id, name: name, title: "" });
  }

  function handlePostClick() {
    console.log(tables);
  }
</script>

<button on:click={handleAddClick}> Add </button>

<button on:click={handlePostClick}> Post </button>

<br /><br />

<table>
  <tbody>
    {#each tables as row}
      <tr>
        <td>{row.name}</td>
        <td>
          <input bind:value={row.title} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
