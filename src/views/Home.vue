<template>
  <div>
    <section class="loading-box" :class="{ fade: loading }">
      <div class="loading"></div>
      <div class="text">loading....</div>
    </section>
    <v-row>
      <v-col :cols="1"></v-col>
      <v-col :cols="6">
        <div id="video"></div>
      </v-col>
      <v-col :cols="2"></v-col>
      <v-col>
        <v-btn @click="StartClassify()">開始/結束結帳</v-btn>
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
.loading-box {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: #ccc;
  transition: opacity 0.4s ease;
  z-index: 15;
}
.loading-box.fade {
  opacity: 0;
  z-index: -15;
}
.loading-box .text {
  padding-top: 16px;
  width: 100%;
  letter-spacing: 1px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  width: 100px;
  height: 100px;
  user-select: none;
  border-radius: 50%;
  box-shadow: #b8d721 0px 1px 1px, #6fbd23 0.5px 0.866px 1px,
    #44a559 0.866px 0.5px 1px, #3d76b7 1px 0px 1px, #9f57ef 0.866px -0.5px 1px,
    #fb69c8 0.5px -0.866px 1px, #ff90c7 0px -1px 1px,
    #ffa481 -0.5px -0.866px 1px, #ff9c5b -0.866px -0.5px 1px,
    #ffcc6c -1px 0px 1px, #f6cb26 -0.866px 0.5px 1px, #fff019 -0.5px 0.866px 1px;
  filter: saturate(400%) contrast(0.9);
  animation: loading 0.46s linear infinite;
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
      console.log('ml5 finish 1')
      this.loading = true
      // eslint-disable-next-line
      new P5(start)
      this.LoadfromObject()
    })
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
  },
  data: () => ({
    alpha: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    features: [],
    feature_result: '',
    feature_chance: '',
    goods: [],
    label: '',
    moneys: {},
    now: 0,
    stop: true,
    loading: false,
    ans: ''
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
      this.stop = true
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
    },
    CheckOut () {
      let all = 0
      this.stop = true
      let list = {}
      let ans = '共買了\n'
      this.goods.forEach(e => {
        all += e.price
        list[e.text] = list[e.text] === undefined ? 1 : list[e.text] += 1
      })
      Object.keys(list).forEach((x) => {
        ans = ans.concat(`${x} ${list[x]}個`, '\n')
      })
      this.ans = ans
      this.$refs.confirm.open('Message', ans, `共${all}元`)
        .then(() => {
          this.clear()
        })
        .catch(() => {

        })
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
      classifier.classify(features, 7, this.Result)
    },
    Result (err, ans) {
      if (err) throw err
      if (ans.confidencesByLabel) {
        // {label:%}
        const confidences = ans.confidencesByLabel
        this.feature_result = ans.label
        this.feature_chance = confidences[ans.label] * 100
      }
      if (!this.stop) {
        if (ans.label === 'bg') {
          console.log(ans.label)
          window.setTimeout(() => { this.Classify() }, 500)
        } else {
          this.$refs.breadConfirmDialog.open(ans.label)
            .then((m) => { this.test2(m) })
            .then(() => { window.setTimeout(() => { this.Classify() }, 1000) })
        }
      }
    },
    LoadfromObject () {
      const data = JSON.parse(window.localStorage.getItem('save'))
      this.moneys = JSON.parse(window.localStorage.getItem('moneys'))
      classifier.load(data, () => { console.log('successfully load') })
    },
    StartClassify () {
      this.stop = !this.stop
      this.Classify()
    }
  }
}
</script>
