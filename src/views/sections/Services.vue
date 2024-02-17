<template>
  <base-section id="nicecleia-nogueira-theme-features">
    <base-section-heading title="Nossos Procedimentos" />
    <component
      :is="'p'"
      class=" mb-10 grey--text text-center"
    >
      Descubra Sua Melhor Versão com Nossos Procedimentos Faciais Exclusivos!
    </component>
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="11"
          md="3"
          class="box"
        >
          <base-avatar-card
            v-bind="feature"
            align="center"
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
          title: 'Dermaplaning',
          icon: 'mdi-fountain-pen-tip',
          mensage: 'Experimente a magia do dermaplaning em nossa clínica! Este tratamento estético suave e não invasivo remove suavemente células mortas da pele e pelos faciais finos, deixando sua pele mais suave, radiante e com uma aparência rejuvenescida. Obtenha resultados instantâneos e revele sua beleza natural com o dermaplaning!',
        },
        {
          title: 'HydraGloss',
          icon: 'mdi-cellphone',
          mensage: 'Descubra o poder da hidratação com o tratamento Hydragloss em nossa clínica. Este serviço exclusivo oferece uma hidratação profunda e revitalizante para a sua pele, proporcionando uma aparência radiante e saudável. Deixe-nos ajudá-lo a conquistar uma pele incrivelmente macia e hidratada.',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Limpeza de Pele Acneica',
          icon: 'mdi-pencil-box-outline',
          mensage: 'Nossa equipe está comprometida em ajudar você a conquistar uma pele mais saudável e livre de acne. Com técnicas suaves e produtos eficazes, nosso tratamento irá desobstruir os poros, reduzir a inflamação e promover uma tez mais clara. Recupere sua confiança e conquiste uma pele radiante.',
        },
        {
          title: 'Limpeza de Pele',
          icon: 'mdi-rocket-launch',
          mensage: 'Nossa clínica oferece o serviço de limpeza de pele, um tratamento essencial para manter a saúde e beleza da sua pele. Com técnicas profissionais e produtos de alta qualidade, nossa limpeza de pele ajuda a remover impurezas, células mortas e resíduos acumulados, deixando sua pele mais limpa, fresca e rejuvenescida. Desfrute de uma tez radiante e saudável com nossa limpeza de pele.',
        },
        {
          title: 'Limpeza de Pele Detox',
          icon: 'mdi-ice-pop',
          mensage: 'Este tratamento especializado é projetado para eliminar toxinas, impurezas e poluentes da sua pele, proporcionando uma revitalização profunda. Com técnicas de desintoxicação e produtos de alta qualidade, nossa limpeza de pele detox ajuda a restaurar o equilíbrio da sua pele, deixando-a com uma aparência fresca e radiante. Tenha uma pele mais saudável e rejuvenescida.',
        },
        {
          title: 'Consultoria de skincare',
          icon: 'mdi-help-circle-outline',
          mensage: 'Oferecemos consultoria de skincare personalizada, seja presencial ou online, para atender às suas necessidades de cuidados com a pele. Avaliamos suas preocupações individuais, discutir suas metas e criar um plano de cuidados com a pele adaptado exclusivamente para você. Seja qual for o seu estilo de vida ou preferência, estamos aqui para guiar você em sua jornada para uma pele deslumbrante.',
        },
      ],
    }),
  }
</script>
<style scoped lang="css">
.box {
    background-color: #917362;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 5%;
    margin: 10px;
    min-height: 400px;
    transition: transform 0.3s ease; /* Adiciona uma transição suave */
}

.box:hover {
    transform: scale(1.03); /* Aumenta o tamanho do elemento em 10% no hover */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Adiciona uma sombra no hover */
}
</style>
