<script>
  import { Buffer } from "buffer";
  export let basic_user
  export let basic_pass
  let tables = [{ id: 1, name: "2022夏", title: "" }];
  let name = "";
  let export_url = "";

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

  const encoded = Buffer.from(`${basic_user}:${basic_pass}`).toString("base64");
  async function handlePostClick() {
    try {
      const data = { name: name, tables: tables };
      const url = "https://animecard-worker.n1sym.com/api/cards";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          Authorization: "Basic " + encoded
        })
      });
      const json = await res.json();
      export_url = "https://animecard.pages.dev/" + json;
    } catch (e) {
      console.log(e)
    }
  }
</script>

<button on:click={handleAddClick}> 追加 </button>

<button on:click={handlePostClick}> 投稿 </button>

{#if export_url != ""}
  <p>
    ページを作成しました : <a
      href={export_url}
      target="_blank"
      rel="noopener noreferrer">{export_url}</a
    >
  </p>
{/if}

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
