<!-- edit from https://gist.github.com/eolant/ba0f8a5c9135d1a146e1db575276177d -->
<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    @keydown.esc="cancel"
    persistent
    class="d-flex"
  >
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text display-1"></v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message" class="pa-4 text title"
        >請問是{{ message }}嗎?</v-card-text
      >
      <v-card-actions class="pt-0 justify-space-between">
        <!-- <v-spacer></v-spacer> -->
        <v-btn color="secondary" @click="agree" class="headline yes">
          YES
          <v-progress-circular
            :size="30"
            :width="2"
            color=""
            indeterminate
            class="circular ml-2"
            >{{ progressValue }}
          </v-progress-circular>
        </v-btn>
        <!-- <v-btn color="primary darken-1" text @click.native="agree">Yes</v-btn> -->
        <v-btn color="secondary" @click.native="cancel">Cancel</v-btn>
      </v-card-actions>
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
      this.progressValue = 5
      this.dialog = true
      this.message = message
      this.options = Object.assign(this.options, options)
      this.interval = setInterval(() => {
        if (this.progressValue === 1) {
          this.resolve(true)
          this.dialog = false
          window.clearInterval(this.interval)
        }
        this.progressValue -= 1
      }, 1000)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    agree () {
      this.resolve(true)
      this.dialog = false
      window.clearInterval(this.interval)
    },
    cancel () {
      this.resolve(false)
      this.dialog = false
      window.clearInterval(this.interval)
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
