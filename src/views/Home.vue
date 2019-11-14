<template>
  <div>
    <!--
    <v-btn @click="test()">test</v-btn>
    <v-btn @click="test2(`麵包${goods.length + 1}`)">test2</v-btn>
    <v-btn @click="AddExample('bg')">Background</v-btn>
    <v-text-field
      hint="label"
      v-model="label"
      style="width:125px"
      :counter="15"
    ></v-text-field>
    <v-btn @click="AddExample(label)">add</v-btn>
    <v-btn @click="Classify()">start</v-btn>
    <ul>
      <li v-for="f in Object.keys(features)" :key="f.name">
        {{ f }} has {{ features[f] }}
      </li>
    </ul>
    <h2>Confidence of {{ feature_result }} is {{ feature_chance }} %</h2> -->
    <v-row>
      <v-col :cols="1"></v-col>
      <v-col :cols="6">
        <div id="video"></div>
      </v-col>
      <v-col :cols="2"></v-col>
      <v-col>
        <v-btn @click="LoadfromObject()" class="mr-4">load</v-btn>
        <v-btn @click="Classify()">start</v-btn>
        <v-divider></v-divider>
        <CheckOutList
          :goods="goods"
          @deleteAll="clear"
          @deleteItem="DeleteItem"
          @checkOut="CheckOut"
          style=""
        ></CheckOutList
      ></v-col>
    </v-row>
    <BreadConfirmDialog ref="breadConfirmDialog"></BreadConfirmDialog>
    <Confirm ref="confirm"></Confirm>
  </div>
</template>
<style scoped>
#video {
  height: 620px;
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
import BreadConfirmDialog from '../components/BreadConfirmDialog'
import CheckOutList from '../components/CheckOutList'
import Confirm from '../components/Confirm'
let featureExtractor, video
const classifier = ml5.KNNClassifier()
export default {
  name: 'App',
  components: {
    BreadConfirmDialog,
    CheckOutList,
    Confirm
  },
  created () {
    featureExtractor = ml5.featureExtractor('MobileNet', () => {
      console.log('ml5 finish')
    })
  },
  mounted () {
    const start = function (p5) {
      p5.setup = _ => {
        let constraints = {
          video: {
            mandatory: {
              minWidth: 735,
              maxWidth: 735
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
  },
  data: () => ({
    //
    features: [],
    feature_result: '',
    feature_chance: '',
    goods: [],
    label: '',
    moneys: {},
    now: 0,
    alpha: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  }),
  methods: {
    test () {
      this.$refs.breadConfirmDialog.open(`麵包${this.goods.length + 1}`).then((m) => { this.test2(m) })
    },
    test2 (m) {
      return new Promise(resolve => {
        this.goods.push({ text: m, id: this.AutoIncremental(), price: parseInt(this.moneys[m]) })
        resolve()
      })
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
    },
    CheckOut () {
      let all = 0
      this.goods.forEach(e => { all += e.price })
      this.$refs.confirm.open('Message', `price is ${all}`, { color: 'cyan' })
    },
    AddExample (label) {
      const features = featureExtractor.infer(video)
      classifier.addExample(features, label)
      this.features = classifier.getCountByLabel()
    },
    Classify () {
      // Get the total number of labels from knnClassifier
      const numLabels = classifier.getNumLabels()
      if (numLabels <= 0) {
        console.error('There is no examples in any label')
        return
      }
      // Get the features of the input video
      const features = featureExtractor.infer(video)
      classifier.classify(features, this.Result)
    },
    Result (err, ans) {
      if (err) throw err
      if (ans.confidencesByLabel) {
        // {label:%}
        const confidences = ans.confidencesByLabel
        this.feature_result = ans.label
        this.feature_chance = confidences[ans.label] * 100
      }
      if (ans.label == 'bg') {
        console.log(ans.label)
        window.setTimeout(() => { this.Classify() }, 500)
      } else {
        this.$refs.breadConfirmDialog.open(ans.label)
          .then((m) => { this.test2(m) })
          .then(() => { window.setTimeout(() => { this.Classify() }, 2000) })
      }
    },
    LoadfromObject () {
      const data = JSON.parse(window.localStorage.getItem('save'))
      this.moneys = JSON.parse(window.localStorage.getItem('moneys'))
      classifier.load(data, () => { alert('successfully load') })
    }
  }
}
</script>
