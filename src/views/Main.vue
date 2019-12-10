<template>
  <div class="container">
    <div class="left">
      <v-btn text @click="$router.push('user')">
        <v-icon> mdi-cash-register</v-icon>
        <span class="mr-2">收銀台</span>
      </v-btn>
    </div>
    <div class="right">
      <v-btn text @click="$router.push('admin')">
        <v-icon>mdi-tools</v-icon>
        <span class="mr-2">管理</span>
      </v-btn>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 80vh;
  width: 100%;
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aaa;
  width: 300px;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  background-color: #aaa;
}
.mr-2 {
  font-size: 2em;
}
</style>
