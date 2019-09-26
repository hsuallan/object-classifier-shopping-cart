<!-- edit from https://gist.github.com/eolant/ba0f8a5c9135d1a146e1db575276177d -->
<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    @keydown.esc="cancel"
    transition="slide-x-transition"
    persistent
    class="d-flex"
  >
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text title"></v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message" class="pa-4 text display-2">
        {{ message }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
/**
 * Vuetify Confirm Dialog component
 *
 * Insert component where you want to use it:
 * <confirm ref="confirm"></confirm>
 *
 * Call it:
 * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
 * Or use await:
 * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
 *   // yes
 * }
 * else {
 *   // cancel
 * }
 *
 * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
 * <template>
 *   <v-app>
 *     ...
 *     <confirm ref="confirm"></confirm>
 *   </v-app>
 * </template>
 *
 * mounted() {
 *   this.$root.$confirm = this.$refs.confirm.open
 * }
 */
export default {
  data: () => ({
    progressValue: null,
    dialog: false,
    resolve: null,
    reject: null,
    message: null,
    options: {
      color: 'secondary',
      width: 290,
      zIndex: 200
    }
  }),
  methods: {
    open (message, options) {
      this.progressValue = 1
      this.dialog = true
      this.message = message
      this.options = Object.assign(this.options, options)
      this.interval = setInterval(() => {
        if (this.progressValue === 1) {
          this.resolve(message)
          this.dialog = false
          window.clearInterval(this.interval)
        }
        this.progressValue -= 1
      }, 500)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    }
  }
}
</script>
<style scoped>
.circular {
  font-size: 12px;
}
.text {
  text-align: center;
}
</style>
