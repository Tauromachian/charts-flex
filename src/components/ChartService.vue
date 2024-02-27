<template>
  <chart-card title="Servicio 753 (kW)" :legend-values="state.legendValues">
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
  Tooltip,
  Filler
} from "chart.js";
import { Line } from "vue-chartjs";
import ChartCard from "./ChartCard.vue";

import { options, backgroundGradient } from "@/utils/chartGeneralOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const state = reactive({
  legendValues: [
    {
      label: "Views",
      color: "#703D57"
    }
  ],
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Views",
        data: [40, 39, 10, 40, 39, 80, 40],
        borderColor: "#703D57",
        backgroundColor: backgroundGradient,

        fill: "start",
        tension: 0.3,
        pointRadius: 0
      }
    ]
  },
  options
});
</script>
<style lang="scss" scoped></style>
