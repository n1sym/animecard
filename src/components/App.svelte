<script>
  let tables = [{ id: 1, name: "2022夏", title: "" }];
  let name = ""
  let export_url = ""

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

  async function handlePostClick () {
    const data = {name: name, tables: tables}
    const url = "https://first_worker.n1sym.workers.dev/api/cards"
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data)
    })
    const json = await res.json()
    export_url = "https://animecard.pages.dev/" + json
  }
</script>

<button on:click={handleAddClick}> 追加 </button>

<button on:click={handlePostClick}> 投稿 </button>
{#if export_url != ""}
  <p><a href={export_url}>{export_url}</a></p>
{/if}

<br />
<p>名前: <input bind:value={name} /></p>


<table>
  <tbody>
    {#each tables as row}
      <tr>
        <td id="c1">{row.name}</td>
        <td>
          <input bind:value={row.title} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
