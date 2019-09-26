<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
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
      <!-- <router-view></router-view> -->
      <v-btn @click="test()">test</v-btn>
      <v-btn @click="test2(`麵包${goods.length + 1}`)">test2</v-btn>
      <v-row>
        <v-col :cols="1"></v-col>
        <v-col :cols="6">
          <div id="video"></div>
        </v-col>
        <v-col :cols="2"></v-col>
        <v-col
          ><CheckOutList
            :goods="goods"
            @deleteAll="clear"
            @deleteItem="DeleteItem"
            style=""
          ></CheckOutList
        ></v-col>
      </v-row>
      <BreadComfirmDialog ref="breadComfirmDialog"></BreadComfirmDialog>
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
import P5dom from 'p5/lib/addons/p5.dom'
import P5 from 'p5'
import ml5 from 'ml5'
import BreadComfirmDialog from './components/BreadComfirmDialog'
import CheckOutList from './components/CheckOutList'
let featureExtractor, video
export default {
  name: 'App',
  components: {
    BreadComfirmDialog,
    CheckOutList
  },
  mounted () {
    const start = function (p5) {
      p5.setup = _ => {
        featureExtractor = ml5.featureExtractor('MobileNet', () => {
          console.log('ml5 success')
        })
        let constraints = {
          video: {
            mandatory: {
              minWidth: 935,
              maxWidth: 935
            },
            optional: [{ maxFrameRate: 30 }]
          }
        }
        p5.noCanvas()
        video = p5.createCapture(constraints)
        video.parent('video')
      }
    }
    // eslint-disable-next-line
    new P5(start)
    console.log(pad('a', 4, 0))
  },
  data: () => ({
    //
    goods: [],
    now: 0,
    alpha: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  }),
  methods: {
    test () {
      this.$refs.breadComfirmDialog.open(`麵包${this.goods.length + 1}`).then((m) => { this.test2(m) })
    },
    test2 (m) {
      this.goods.push({ text: m, id: this.AutoIncremental(), price: Math.floor(Math.random() * 100) })
    },
    clear () {
      this.goods.length = 0
      this.goods.pop()
    },
    AutoIncremental () {
      this.now < 9 ? this.now += 1 : this.now = 0
      return new Date().valueOf().toString().slice(7) + this.alpha[this.now]
    },
    DeleteItem (id) {
      let pos = this.goods.findIndex((x) => {
        return x.id === id
      })
      this.goods.splice(pos, 1)
      console.log(pos)
    }
  }
}
</script>
