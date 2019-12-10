<template>
  <v-app>
    <v-app-bar app>
      <v-btn text @click="$router.push('user')">
        <v-icon> mdi-cash-register</v-icon>
        <span class="mr-2">收銀台</span>
      </v-btn>
      <v-btn text @click="$router.push('admin')">
        <v-icon>mdi-tools</v-icon>
        <span class="mr-2">管理</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<style scoped>
#video {
  height: 720px;
}
.cameraicon {
  color: azure;
  font-size: 120px;
}
</style>
<script>
// eslint-disable-next-line
export default {
  name: 'App'
}
</script>
