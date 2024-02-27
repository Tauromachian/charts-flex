<template>
  <ChartCard title="Consumo por período" :legend-values="state.legendValues">
    <Doughnut :data="data" :options="state.options" />
  </ChartCard>
</template>

<script setup>
import { reactive, computed } from "vue";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip
} from "chart.js";
import { Doughnut } from "vue-chartjs";
import ChartCard from "./ChartCard.vue";

import { options } from "@/utils/chartGeneralOptions";
import { themeColors } from "@/plugins/vuetify";

ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, Tooltip);

const state = reactive({
  legendValues: [
    {
      label: "MDP (kW)",
      color: themeColors.colors.accent
    },
    {
      label: "MDM (kW)",
      color: themeColors.colors.accent2
    },
    {
      label: "MDD (kW)",
      color: themeColors.colors.accent3
    }
  ],
  options: {
    ...options,
    scales: {
      display: false
    }
  }
});

const data = computed(() => {
  return {
    labels: ["MDP (kW)", "MDD (kW)", "MDM (kW)"],
    datasets: [
      {
        label: "Sales",
        data: [100, 120, 90],
        backgroundColor: [
          themeColors.colors.accent,
          themeColors.colors.accent2,
          themeColors.colors.accent3
        ]
      }
    ]
  };
});
</script>

<style lang="scss" scoped></style>
