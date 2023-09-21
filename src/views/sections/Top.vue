<template>
  <section id="norkon-hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.webp')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title="Desenvolvimento de software"
          />

          <base-heading
            size="text-h2"
            title="Transformando negócios"
            weight="medium"
          />

          <base-body>
            Com foco nas necessidades reais do cliente e uma abordagem voltada aos usuários criamos soluções inovadoras e que agregam mais valor ao seu negócio
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn @click="navigate('contato')">
              Vamos conversar
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
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

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
