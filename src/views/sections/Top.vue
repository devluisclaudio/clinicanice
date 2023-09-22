<template>
  <section id="nicecleia-nogueira-hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light-1.avif')"
      class="white--text"
      gradient="to bottom, rgba(89, 81, 66, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-5">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading
            size="text-h2"
            title="Nicecleia Nogueira"
            weight="medium"
          />

          <base-subheading
            weight="regular"
            title="Estética Avançada"
          />

          <base-body>
            Descubra o poder da sua beleza, realçando seus traços naturais de maneira elegante e duradoura com alta tecnologia.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn @click="navigate('contato')">
              Marcar Minha Consulta
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">ou</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
              @click="navigate('servico')"
            >
              Nossos serviços
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '80vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
    methods: {
      navigate (route) {
        this.$router.push(route)
      },
    },
  }
</script>

<style scoped>
.text-h2{
  font-family: 'Nebulen Personal Use Only', sans-serif !important;
}
</style>
