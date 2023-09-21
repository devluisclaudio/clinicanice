<template>
  <base-section id="norkon-theme-features">
    <base-section-heading title="Qual é a sua Necessidade?">
      A solução pensada atende aos requisitos priorizados no planejamento e levando em consideração a viabilidade técnica e orçamentária.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            {{ feature.mensage }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'UX e UI Design',
          icon: 'mdi-fountain-pen-tip',
          mensage: 'Design de interface para sites, sistemas e aplicativos com foco na melhor experiência do usuário. Humanize a experiência de usuário do seu produto e forneça valor adicional para seus clientes!',
        },
        {
          title: 'Apps Multiplataforma',
          icon: 'mdi-cellphone',
          mensage: 'Trabalhamos com um modelo de desenvolvimento que facilita a entrega do projeto em ambas as plataformas (Android e IOS), o que muitas vezes representa menor tempo de desenvolvimento e menor investimento.',
        },
        {
          color: 'primary',
          dark: true,
          title: 'PRECISO ATUALIZAR UM PROJETO QUE JÁ POSSUO',
          icon: 'mdi-pencil-box-outline',
          mensage: 'Muito bem, o primeiro passo é conhecer o seu projeto. Qual o tipo de projeto você precisa alterar ou atualizar?',
        },
        {
          title: 'PRECISO FAZER UM NOVO PROJETO',
          icon: 'mdi-rocket-launch',
          mensage: 'Excelente, adoramos os desafios que novos projetos nos trazem. Qual é o tipo de projeto que você precisa desenvolver?',
        },
        {
          title: 'Otimizar Seo',
          icon: 'mdi-ice-pop',
          mensage: 'Temos um conjunto de estratégias de otimização de sites que melhoram o ranqueamento da sua plataforma em motores de busca, como Google, Bing e YouTube!',
        },
        {
          title: 'Suporte',
          icon: 'mdi-help-circle-outline',
          mensage: 'Suporte técnico especializado, independentemente da tecnologia, para oferecer sustentação ao seu negócio tratando ou prevenindo possíveis problemas, ou seja, um apoio mantém a operação em produção pelo maior tempo possível.',
        },
      ],
    }),
  }
</script>
