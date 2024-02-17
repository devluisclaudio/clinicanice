<template>
  <base-section
    id="nicecleia-nogueira-pro-features"
    class="text-center"
  >
    <v-img
      :src="$vuetify.theme.isDark ? require(`@/assets/nicecleia-nogueira-logo-dark.svg`): require(`@/assets/nicecleia-nogueira-logo.svg`)"
      class="mx-auto mb-8"
      max-width="512"
    />

    <base-section-heading title="Agende Sua Consulta Agora!">
      <span class="subtitle">Descubra os Tratamentos de Estética mais avançados e atinga a melhor versão de si mesma!</span>
    </base-section-heading>

    <div class="py-4" />

    <v-btn
      class="font-weight-bold"
      :color="$vuetify.theme.isDark ? 'white': 'secondary'"
      min-width="168"
      light
      target="_blank"
      x-large
      @click="openInNewTab"
    >
      Marcar minha Consulta
      <v-icon right>
        mdi-whatsapp
      </v-icon>
    </v-btn>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Components', 5, '40+'],
        ['Example Pages', 3, '10+'],
        ['Vue CLI Support', true, true],
        ['Bugfixes and Issues', false, true],
        ['6 Months Free Updates', false, true],
        ['Supports Vuetify', false, true],
        ['Price', 'Free', '$59'],
      ],
    }),
    methods: {
      openInNewTab () {
        const url = 'https://api.whatsapp.com/send?phone=5548984476890&text=Olá vim atraves do site e gostaria...'
        window.open(url, '_blank', 'noreferrer')
      },
    },
  }
</script>
<style scoped>
.subtitle{
  color: black;
}
</style>
