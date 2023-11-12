<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<ul>
  <li>{data.activity.name}</li>
  <li>{data.activity.distance}</li>
  <li>{data.activity.duration}</li>
</ul>
