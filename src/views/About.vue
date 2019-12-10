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
        <div class="list">
          <v-card>
            <v-btn @click="Bg()">加入背景</v-btn>
            <v-text-field
              hint="label"
              prepend-inner-icon="mdi-baguette"
              v-model="label"
              style="width:125px"
              :counter="15"
            ></v-text-field>
            <div class="line">
              <v-text-field
                hint="money"
                prepend-inner-icon="mdi-currency-usd"
                v-model="money"
                :rules="[rules.number]"
                style="width:125px"
                :counter="15"
              ></v-text-field>
            </div>
            <v-btn @click="AddExample(label)" class="mr-3">加入樣本</v-btn>
            <v-btn @click="Classify()">測試</v-btn>
            <v-btn @click="SaveasObject()" class="ml-3">儲存訓練</v-btn>
            <v-divider></v-divider>
          </v-card>
          <v-card class="shopinglist">
            <v-list v-if="Object.keys(features).length != 0">
              <v-list-item
                v-for="f in Object.keys(features)"
                :key="f"
                class="ml-3"
              >
                <v-list-item-content>
                  <v-list-item-title
                    v-if="f === 'bg'"
                    v-text="`背景有 ${features[f]} 個樣本 `"
                  ></v-list-item-title>
                  <v-list-item-title
                    v-else
                    v-text="`${f}有${features[f]}樣本 $${moneys[f]}`"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn @click="ClearLabel(f)" icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <div id="end" style=""></div>
            </v-list>
          </v-card>
          <h2 v-if="feature_result.length != 0">
            樣本測試結果：{{
              feature_result === "bg" ? "背景" : feature_result
            }}
          </h2>
        </div>
      </v-col>
    </v-row>
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
  50% {
    transform: rotate(180deg);
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
.list {
  padding-right: 1vw;
}
</style>
<script>
// eslint-disable-next-line
import P5dom from 'p5/lib/addons/p5.dom'
import P5 from 'p5'
import ml5 from 'ml5'
import Confirm from '../components/Confirm'
let featureExtractor, video
export default {
  name: 'App',
  components: {
    Confirm
  },
  created () {
    featureExtractor = ml5.featureExtractor('MobileNet', () => {
      console.log('ml5 finish 1')
      this.loading = true
      // eslint-disable-next-line
      new P5(start)
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
    features: {},
    feature_result: '',
    feature_chance: '',
    money: '',
    moneys: {},
    label: '',
    classifier: ml5.KNNClassifier(),
    save_data: '',
    loading: false,
    rules: {
      number (value) {
        const reg = /^[^a-z]*$/
        return reg.test(value) ? true : 'number only'
      }
    }
  }),
  methods: {
    async AddExample (label) {
      ;[1, 2, 3].forEach(async (i) => {
        let features = await featureExtractor.infer(video)
        await this.classifier.addExample(features, label)
        this.features = await this.classifier.getCountByLabel()
      })
      if (label !== 'bg') {
        this.moneys[label] = this.money
      }
    },
    Classify () {
      // Get the total number of labels from knnClassifier
      const numLabels = this.classifier.getNumLabels()
      if (numLabels <= 0) {
        console.error('There is no examples in any label')
        return
      }
      // Get the features of the input video
      const features = featureExtractor.infer(video)
      this.classifier.classify(features, 7, this.Result)
    },
    Result (err, ans) {
      if (err) throw err
      if (ans.confidencesByLabel) {
        // {label:%}
        const confidences = ans.confidencesByLabel
        this.feature_result = ans.label
        this.feature_chance = confidences[ans.label] * 100
      }
    },
    SaveasObject () {
      const dataset = this.classifier.getClassifierDataset()
      if (this.classifier.mapStringToIndex.length > 0) {
        Object.keys(dataset).forEach((key) => {
          if (this.classifier.mapStringToIndex[key]) {
            dataset[key].label = this.classifier.mapStringToIndex[key]
          }
        })
      }
      const tensors = Object.keys(dataset).map((key) => {
        const t = dataset[key]
        if (t) {
          return t.dataSync()
        }
        return null
      })
      console.table(this.save_data)
      this.save_data = { dataset, tensors }
      window.localStorage.setItem('save', JSON.stringify(this.save_data))
      window.localStorage.setItem('moneys', JSON.stringify(this.moneys))
      window.localStorage.setItem('features', JSON.stringify(this.features))
      alert('save successfully')
    },
    ClearLabel (name) {
      this.classifier.clearLabel(name)
      this.features = this.classifier.getCountByLabel()
    },
    async Bg () {
      this.AddExample('bg')
    }
  }
}
</script>
<style scoped>
.line {
  display: inline;
}
</style>
