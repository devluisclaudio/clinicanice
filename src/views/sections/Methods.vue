<template>
  <v-theme-provider dark>
    <base-section
      id="norkon-features"
      class="secondary"
    >
      <base-section-heading
        title="Inovação, design e tecnologia"
      >
        Antes do desenvolvimento da solução é preciso entender o problema, identificar as reais necessidades dos usuários, analisar a viabilidade de execução e como a solução irá gerar o retorno de investimento esperado para o seu modelo de negócio.
      </base-section-heading>
      <v-responsive
        class="mx-auto"
        max-width="1350"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card.title"
              cols="12"
              sm="4"
              md="2"
            >
              <base-info-card
                align="center"
                dark
                v-bind="card"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-magnify',
          title: 'Imersão',
          text: 'Entendimento do problema',
        },
        {
          icon: 'mdi-google-circles-extended',
          title: 'Definição',
          text: 'Limitação do problema',
        },
        {
          icon: 'mdi-head-lightbulb-outline',
          title: 'Ideação',
          text: 'Elaboração das possíveis soluções',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Prototipação',
          text: 'Elaboração de telas para o protótipo',
        },
        {
          icon: 'mdi-file-tree',
          title: 'Planejamento',
          text: 'Elaboração de estratégias e arquiteturas no desenvolvimento do projeto',
        },
      ],
    }),
  }
</script>
