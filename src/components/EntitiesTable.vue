<template>
  <VDataTableServer
    :headers="headers"
    :items="data.entities"
    :items-length="data.total"
  ></VDataTableServer>
</template>

<script setup>
import { reactive } from "vue";

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

const data = reactive({
  entities: [
    {
      name: "Data 1",
      pike: 100,
      day: 5,
      morning: 8,
      reactive: 20,
      mdp: 10,
      mdd: 7,
      mdm: 3
    },
    {
      name: "Data 2",
      pike: 120,
      day: 4,
      morning: 9,
      reactive: 25,
      mdp: 12,
      mdd: 8,
      mdm: 4
    },
    {
      name: "Data 3",
      pike: 130,
      day: 6,
      morning: 10,
      reactive: 22,
      mdp: 11,
      mdd: 9,
      mdm: 5
    },
    {
      name: "Data 4",
      pike: 140,
      day: 7,
      morning: 11,
      reactive: 30,
      mdp: 13,
      mdd: 10,
      mdm: 6
    },
    {
      name: "Data 5",
      pike: 150,
      day: 8,
      morning: 12,
      reactive: 32,
      mdp: 14,
      mdd: 11,
      mdm: 7
    },
    {
      name: "Data 6",
      pike: 160,
      day: 9,
      morning: 13,
      reactive: 35,
      mdp: 15,
      mdd: 12,
      mdm: 8
    },
    {
      name: "Data 7",
      pike: 170,
      day: 10,
      morning: 14,
      reactive: 40,
      mdp: 16,
      mdd: 13,
      mdm: 9
    },
    {
      name: "Data 8",
      pike: 180,
      day: 11,
      morning: 15,
      reactive: 45,
      mdp: 17,
      mdd: 14,
      mdm: 10
    },
    {
      name: "Data 9",
      pike: 190,
      day: 12,
      morning: 16,
      reactive: 50,
      mdp: 18,
      mdd: 15,
      mdm: 11
    },
    {
      name: "Data 10",
      pike: 200,
      day: 13,
      morning: 17,
      reactive: 55,
      mdp: 19,
      mdd: 16,
      mdm: 12
    }
  ],
  total: 100
});
</script>
