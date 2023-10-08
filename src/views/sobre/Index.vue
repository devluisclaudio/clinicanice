<template>
  <v-theme-provider>
    <base-section
      id="nicecleia-nogueira-social"
      class="transparent text-center"
      space="100"
    >
      <base-img
        :src="$vuetify.theme.isDark ? require(`@/assets/ISOTIPO PRETO.svg`): require(`@/assets/ISOTIPO branco.svg`)"
        class="mr-3 mb-3 d-flex justify-content-center align-items-center"
        contain
        max-height="110"
        width="100%"
      />

      <base-section-heading
        title="Quem é Nicecleia Nogueira?"
      >
        <span class="subtitle-te"> A Nicecleia Nogueira Estética Persoanalizada nasceu para auxiliar pessoas a trazer a tona a sua melhor versão, trazendo um olhar personalizado para cada um que passa em suas mãos.<br>
          Nossa abordagem única se baseia na escuta ativa e no entendimento profundo das necessidades de cada paciente. Com nossa expertise, criamos um ambiente de apoio e confiança, guiando cada indivíduo em direção à sua melhor versão, não apenas como pacientes, mas como ser humano único e especial.
          <br>Possuímos a profunda convicção de que todos merecem a oportunidade de alcançar a sua melhor versão. Acreditamos que o cuidado de saúde deve ser personalizado, indo além do convencional.
        </span>
      </base-section-heading>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
    methods: {
      navigate (route) {
        this.$router.push(route)
      },
    },
  }
</script>
<style scoped>
.subtitle-te{
  text-align: justify;
  color: black !important;
}
</style>
