<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    bottom
    left
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template #activator="{ attrs, on }">
      <v-card
        id="nicecleia-nogueira-settings"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 164px; right: -35px;"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large>
          mdi-cog
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title
        align="center"
        title="Theme Colors"
        space="0"
      />

      <v-card-text>
        <v-item-group
          v-model="currentThemePrimary"
          class="d-flex justify-center"
        >
          <v-item
            v-for="color in colors"
            :key="color"
            :value="color"
          >
            <template #default="{ active, toggle }">
              <base-avatar
                :color="color"
                :outlined="active"
                class="ma-2"
                size="48"
                style="cursor: pointer;"
                @click.stop="toggle"
              />
            </template>
          </v-item>
        </v-item-group>

        <v-divider class="my-6" />

        <base-btn
          class="mr-4"
          :outlined="$vuetify.theme.dark"
          @click="$vuetify.theme.dark = false"
        >
          <v-icon left>
            mdi-white-balance-sunny
          </v-icon>
          Light
        </base-btn>

        <base-btn
          :outlined="!$vuetify.theme.dark"
          @click="$vuetify.theme.dark = true"
        >
          <v-icon left>
            mdi-weather-night
          </v-icon>
          Dark
        </base-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
  export default {
    name: 'HomeSettings',

    data () {
      return {
        colors: [
          this.$vuetify.theme.currentTheme.primary,
          this.$vuetify.theme.currentTheme.secondary,
          this.$vuetify.theme.currentTheme.accent,
        ],
        menu: false,
      }
    },

    computed: {
      currentThemePrimary: {
        get () {
          return this.$vuetify.theme.currentTheme.primary
        },
        set (val) {
          const target = this.$vuetify.theme.isDark ? 'dark' : 'light'

          this.$vuetify.theme.themes[target].primary = val
        },
      },
    },
  }
</script>
