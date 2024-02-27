<template>
  <VApp>
    <VContainer>
      <VRow>
        <VCol cols="12" md="2"> </VCol>
        <VCol cols="12" md="4">
          <ChartService></ChartService>
        </VCol>
        <VCol cols="12" md="1">
          <VCard>
            <VCardTitle>Some Title</VCardTitle><VCardText></VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="5">
          <ChartServicePowerFactor></ChartServicePowerFactor>
        </VCol>
        <VCol cols="12" md="6">
          <ChartServiceCurrentByTime></ChartServiceCurrentByTime>
        </VCol>
        <VCol cols="12" md="6">
          <ChartServiceVoltageByTime></ChartServiceVoltageByTime>
        </VCol>
        <VCol cols="12" md="7">
          <VCard>
            <VCardTitle>Entidades</VCardTitle
            ><VCardText>
              <EntitiesTable></EntitiesTable>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VApp>
</template>

<script setup>
import EntitiesTable from "@/components/EntitiesTable.vue";
import ChartService from "@/components/ChartService.vue";
import ChartServicePowerFactor from "@/components/ChartServicePowerFactor.vue";
import ChartServiceCurrentByTime from "@/components/ChartServiceCurrentByTime.vue";
import ChartServiceVoltageByTime from "@/components/ChartServiceVoltageByTime.vue";
</script>
