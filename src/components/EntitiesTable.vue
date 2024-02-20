<template>
  <VDataTableServer :headers="headers"></VDataTableServer>
</template>

<script setup>
const headers = [
  {
    title: "Nombre",
    key: "name"
  },
  { title: "Pico (kWh)", key: "pike" },
  { title: "Día (kWh)", key: "day" },
  { title: "Madrugada (kWh)", key: "morning" },
  { title: "Reactivo (kVArh)", key: "reactive" },
  { title: "MDP (kW)", key: "mdp" },
  { title: "MDD (kW)", key: "mdd" },
  { title: "MDM (kW)", key: "mdm" }
];
</script>
