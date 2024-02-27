<template>
  <v-card class="d-flex flex-column">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text class="py-1">
      <div class="d-flex flex-wrap gap-3">
        <span
          v-for="(legendValue, index) in legendValues"
          :key="`legend-badge-${index}`"
        >
          <v-badge inline :color="legendValue.color" dot></v-badge>
          <span>{{ legendValue.label }}</span>
        </span>
      </div>
    </v-card-text>
    <v-card-text class="flex-grow-1">
      <div class="relative h-100">
        <slot></slot>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ""
  },
  legendValues: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped></style>
