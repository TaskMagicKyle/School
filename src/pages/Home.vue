<template>
  <q-page>
    <div style="width:100vw;">
      <q-img class="full-width" src="statics/imgs/home.png">
      <div class="absolute-top" style="width:80px;background:none">
          <q-btn
            unelevated
            round
            class="q-mt-sm q-ml-md"
            icon="img:statics/imgs/back.png"
            @click="drawer()"
          />
        </div>
        <q-btn
          unelevated
          round
          class="absolute-top-right q-mt-lg q-mr-md"
          icon="img:statics/imgs/menu.png"
        />
      
      </q-img>
    </div>
    <div class="full-width" style="height:40px"></div>
    <div class="q-ml-lg q-mr-lg" :style="getStyle">
      <div class="row q-col-gutter-lg">
        <div class="col-6" v-for="(item,index) in card_items" :key="'item'+index">
          <q-card
            style="background-image:url('statics/imgs/card-back.png');height:150px"
            v-ripple
            @click="$router.push(item.route)"
          >
            <center>
              <q-img
                v-if="index===0 || index===1"
                :src="item.photo"
                style="width:40px;margin-top:40px"
              />
              <q-img v-else :src="item.photo" style="width:50px;margin-top:40px" />
              <q-item-label class="q-mt-lg text-white">{{item.name}}</q-item-label>
            </center>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import constant from "@/constant";
export default {
  name: "Home",
  data() {
    return {
      card_items: constant.card_items
    };
  },
  computed: {
    getStyle() {
      const height = window.innerHeight - 235 - 50 - 20;
      return `height:${height}px;overflow-y:auto`;
    }
  },
  methods: {
    drawer() {
      this.$emit("listen", true);
    }
  }
};
</script>