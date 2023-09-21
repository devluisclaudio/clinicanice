<template>
  <v-footer
    id="norkon-home-footer"
    color="black"
    min-height="72"
    dark
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in social">
              <a
                :key="i"
                class="white--text pa-1 pa-md-0"
                target="_blank"
                :href="href[i]"
                v-text="s"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; {{ new Date().getFullYear() }} Norkon Technology
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Instagram',
        'Linkedin',
        'Site',
      ],
      href: [
        'https://instagram.com/norkontechnology?igshid=ZDdkNTZiNTM=',
        'https://www.linkedin.com/company/norkon-tecnology/',
        '#',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
