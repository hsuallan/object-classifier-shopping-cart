<template>
  <div>
    <v-card max-width="300px">
      <v-toolbar-title class="ml-1 mb-3">結帳清單</v-toolbar-title>
      <v-divider></v-divider>
    </v-card>
    <v-card max-width="300px" class="shopinglist">
      <v-list v-if="All() != 0">
        <v-list-item v-for="item in goods" :key="item.id" class="ml-3">
          <v-list-item-content>
            <v-list-item-title
              v-text="item.text"
              class="mb-2"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="`$ ${item.price}`"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn @click="DeleteItem(item.id)" icon>
              <v-icon color="grey lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <div id="end" style=""></div>
      </v-list>
    </v-card>
    <v-card max-width="300px">
      <v-divider></v-divider>
      <v-list-item v-if="All() != 0">
        <v-list-item-title class="d-flex flex-row">
          <v-icon>mdi-currency-usd</v-icon>
          <v-list-item-title class="ml-1 title">{{ All() }}</v-list-item-title>
        </v-list-item-title>
      </v-list-item>
      <v-list-item v-if="All() != 0">
        <v-list-item-title class="d-flex flex-row justify-space-between">
          <v-btn color="light-blue lighten-1">結帳</v-btn>
          <v-btn color="error" @click="$emit('deleteAll')">刪除全部</v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      /* 商品 */
      type: Array,
      default: null
    }
  },
  updated () {
    document.querySelector('#end').scrollIntoView()
  },
  methods: {
    DeleteItem: function (name) {
      this.$emit('deleteItem', name)
    },
    All: function () {
      let all = 0
      this.goods.forEach(e => {
        all += e.price
      })
      return all
    }
  }
}
</script>
<style scoped>
.shopinglist {
  max-height: 570px;
  overflow-y: scroll;
}
.shopinglist::-webkit-scrollbar {
  display: none;
}
</style>
