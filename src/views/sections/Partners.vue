<template>
  <base-section
    id="norkon-affiliates"
    space="36"
  >
    <v-container>
      <base-section-heading title="Nossos Parceiros" />
      <v-row>
        <v-col
          v-for="n in 4"
          :key="n"
          cols="12"
          md="3"
        >
          <base-img
            :src="require(`@/assets/logo-${n}-${$vuetify.theme.isDark ? 'dark' : 'light'}.png`)"
            color="grey"
            contain
            class="d-flex justify-content-center align-items-center"
            height="60"
            width="100%"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
  }
</script>
