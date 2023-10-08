<template>
  <v-theme-provider dark>
    <base-section
      id="nicecleia-nogueira-social"
      class="secondary text-center"
      space="56"
    >
      <base-img
        :src="require(`@/assets/ISOTIPO PRETO.svg`)"
        class="mr-3 mb-3 d-flex justify-content-center align-items-center"
        contain
        max-height="110"
        width="100%"
      />

      <base-section-heading
        color="transparent"
        title="Quem é Nicecleia Nogueira?"
      >
        <span class="subtitle"> A Nicecleia Nogueira Estética Persoanalizada nasceu para auxiliar pessoas a trazer a tona a sua melhor versão, trazendo um olhar personalizado para cada um que passa em suas mãos.<br>
          Nossa abordagem única se baseia na escuta ativa e no entendimento profundo das necessidades de cada paciente. Com nossa expertise, criamos um ambiente de apoio e confiança, guiando cada indivíduo em direção à sua melhor versão, não apenas como pacientes, mas como ser humano único e especial.
          <br>Possuímos a profunda convicção de que todos merecem a oportunidade de alcançar a sua melhor versão. Acreditamos que o cuidado de saúde deve ser personalizado, indo além do convencional.
        </span>
      </base-section-heading>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        light
        min-width="168"
        target="_blank"
        x-large
        @click="navigate('sobre')"
      >
        Sobre mim

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
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
.subtitle{
  text-align: justify;
}
</style>
