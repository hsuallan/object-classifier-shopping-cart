<template>
  <div>
    <!-- <v-btn @click="test()">test</v-btn>
    <v-btn @click="test2(`麵包${goods.length + 1}`)">test2</v-btn> -->
    <v-row>
      <v-col :cols="1"></v-col>
      <v-col :cols="6">
        <div id="video"></div>
      </v-col>
      <v-col :cols="2"></v-col>
      <v-col>
        <div class="list">
          <v-card>
            <v-btn @click="Bg()">Background</v-btn>
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

            <v-btn @click="AddExample(label)" class="mr-3">add</v-btn>
            <v-btn @click="Classify()">start</v-btn>
            <v-btn @click="SaveasObject()" class="ml-3">save</v-btn>
            <v-divider></v-divider>
          </v-card>
          <!-- <ul>
            <li v-for="f in Object.keys(features)" :key="f.name">
              {{ f }} has {{ features[f] }}
            </li>
          </ul> -->
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
                    v-text="`${f} has ${features[f]} examples `"
                    class=""
                  ></v-list-item-title>
                  <v-list-item-title
                    v-else
                    v-text="`${f} has ${features[f]} examples $${moneys[f]}`"
                    class=""
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
            Confidence of {{ feature_result }} is {{ feature_chance }} %
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
      console.log('ml5 success')
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
    features: {},
    feature_result: '',
    feature_chance: '',
    money: '',
    moneys: {},
    label: '',
    classifier: ml5.KNNClassifier(),
    save_data: '',
    rules: {
      number (value) {
        const reg = /^[^a-z]*$/
        return reg.test(value) ? true : 'number only'
      }
    }
  }),
  methods: {
    async AddExample (label) {
      let t = 0
      while (t < 5) {
        let features = featureExtractor.infer(video)
        this.classifier.addExample(features, label)
        this.features = this.classifier.getCountByLabel()
        ++t
      }
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
      this.classifier.classify(features, this.Result)
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
