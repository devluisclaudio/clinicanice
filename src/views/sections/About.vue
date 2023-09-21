<template>
  <v-theme-provider dark>
    <base-section
      id="norkon-social"
      class="secondary text-center"
      space="56"
    >
      <base-img
        :src="require(`@/assets/norkon-logo-sem-fundo-dark.svg`)"
        class="mr-3 d-flex justify-content-center align-items-center"
        contain
        max-height="80"
        width="100%"
      />

      <base-section-heading
        color="transparent"
        title="NORKON É A SUA EQUIPE DE TI"
      >
        Para encarar o mercado disputado e cada vez mais maduro, em todas as áreas de atuação, sabemos o quanto é importante concentrar todos os esforços e olhares voltados para o seu core business. É exatamente por isto que a Norkon tem a proposta de ser a sua equipe de TI. Deixe conosco as preocupações e soluções em software e sistemas e acelere seu negócio.
        Softwares desenvolvidos são sempre sob medida, entendemos a necessidade do cliente. Para esclarecer e simplificar a contratação de softwares, aplicativos e sites é aconselhável investir em um PoC (Prova de Conceito) assim com poucas horas você e sua equipe poderão discutir de forma mais concreta e clara o projeto.
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
        Sobre a Norkon

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
