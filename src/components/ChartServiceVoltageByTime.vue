<template>
  <ChartCard title="Servicio" :legend-values="state.legendValues">
    <Line :data="state.data" :options="state.options" />
  </ChartCard>
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
import { themeColors } from "@/plugins/vuetify";

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
      label: "I1 (V)",
      color: themeColors.colors.accent
    },
    {
      label: "I2 (V)",
      color: themeColors.colors.accent2
    },
    {
      label: "I3 (V)",
      color: themeColors.colors.accent3
    }
  ],
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Views",
        data: [40, 39, 10, 40, 39, 80, 40],
        borderColor: themeColors.colors.accent,
        backgroundColor: themeColors.colors.accent,

        fill: false,
        tension: 0.3,
        pointRadius: 0
      },
      {
        label: "Views",
        data: [40, 81, 10, 22, 34, 80, 60],
        borderColor: themeColors.colors.accent2,
        backgroundColor: themeColors.colors.accent2,

        fill: false,
        tension: 0.3,
        pointRadius: 0
      },
      {
        label: "Views",
        data: [20, 42, 10, 55, 39, 22, 40],
        borderColor: themeColors.colors.accent3,
        backgroundColor: themeColors.colors.accent3,

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
