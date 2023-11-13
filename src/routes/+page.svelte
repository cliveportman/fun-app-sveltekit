<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration";
  dayjs.extend(duration);
</script>

<ul class="text-yellow-200 text-5xl font-bold leading-tight">
  <li>{data.activity.name}</li>
  <li>
    {(data.activity.distance / 1000).toLocaleString("en-GB", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })} km
  </li>
  <li>
    {dayjs
      .duration(data.activity.duration, "seconds")
      .format("H [hrs] m [min]")}
  </li>
</ul>
