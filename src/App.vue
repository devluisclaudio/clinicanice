<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
  export default {
    name: 'NicicleiaNogueira',
    metaInfo: {
      title: 'Nicicleia Nogueira',
      titleTemplate: '%s | Nicicleia Nogueira',
      htmlAttrs: { lang: 'pt-br' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Harmonização facial e corporal com resultados além das expectativas.<br>Descubra o poder da sua beleza, realçando seus traços naturais de maneira elegante e duradoura com alta tecnologia.' },
      ],
    },
  }
</script>

<style lang="sass">
  .extra-padding
    padding-bottom: 96px !important
    padding-top: 96px !important

    @media screen and (max-width: 959px)
      padding-top: 48px !important
      padding-bottom: 48px !important
</style>
