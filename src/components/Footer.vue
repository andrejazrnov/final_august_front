<template>
  <v-footer
    v-bind="localAttrs"
    :padless="padless"
    width="100%"
    class="pa-0"
    >
    <v-card
      flat
      tile
      width="100%"
      class="lighten-1 text-center"
      color="#ffb32a" 
      >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
          >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <!-- <v-card-text class="white--text" color="#ffb32a">
          {{ new Date().getFullYear() }} <strong>VUETIFY</strong>
      </v-card-text> -->
    </v-card>
  </v-footer>
</template>


<script>
export default {
    name:'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ],
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>

<style scoped lang="scss">


</style>
