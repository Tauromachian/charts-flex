<template>
  <chart-card title="Website views" :legend-values="state.legendValues">
    <Line :data="state.data" :options="state.options" />
  </chart-card>
</template>

<script setup>
import { reactive } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from "chart.js";
import { Line } from "vue-chartjs";
import ChartCard from "./ChartCard.vue";

import { options } from "@/utils/chartGeneralOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const state = reactive({
  legendValues: [
    {
      label: "Views",
      color: "#c724f0"
    }
  ],
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Views",
        data: [40, 39, 10, 40, 39, 80, 40],
        borderColor: "#c724f0",
        backgroundColor: "#c724f0",

        fill: false,
        tension: 0.3,
        pointRadius: 0
      }
    ]
  },
  options
});
</script>
<style lang="scss" scoped></style>
