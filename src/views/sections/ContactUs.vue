<template>
  <base-section
    id="norkon-pro-features"
    class="text-center"
  >
    <v-img
      :src="$vuetify.theme.isDark ? require(`@/assets/norkon-logo-sem-fundo-dark.svg`): require(`@/assets/norkon-logo-sem-fundo.svg`)"
      class="mx-auto mb-8"
      max-width="512"
    />

    <base-section-heading title="Uma equipe que também faz parte da sua equipe.">
      Transformamos ideias em novos negócios com <strong>Eficiência e Credibilidade</strong>.
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
      Vamos conversar?
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
        const url = 'https://api.whatsapp.com/send?phone=5592984552589&text=Olá vim atraves do site da Norkon Technology e gostaria...'
        window.open(url, '_blank', 'noreferrer')
      },
    },
  }
</script>
