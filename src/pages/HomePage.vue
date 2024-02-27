<template>
  <VApp>
    <VContainer>
      <VRow>
        <VCol cols="12" md="2">
          <ChartService></ChartService>
        </VCol>
        <VCol cols="12" md="4"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
        </VCol>
        <VCol cols="12" md="1"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
        </VCol>
        <VCol cols="12" md="5"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
        </VCol>
        <VCol cols="12" md="1"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
        </VCol>
        <VCol cols="12" md="5"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
        </VCol>
        <VCol cols="12" md="1"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
        </VCol>
        <VCol cols="12" md="5"
          ><VCard
            ><VCardTitle>Some Title</VCardTitle><VCardText></VCardText
          ></VCard>
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
</script>
