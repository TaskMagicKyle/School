<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="flag"
      show-if-above
      :width="310"
      bordered
      content-class="bg-grey-3 flex flex-center"
    >
      <div style="width:310px;height:100vh;position:relative">
        <img src="statics/imgs/draw.png" style="width:310px;height:100vh;object-fit:cover" />
        <div class="absolute-center" style="width:180px">
          <q-list v-for="(card_item,index) in card_items" :key="'card'+index">
            <q-item clickable v-ripple @click="$router.push(card_item.route)">
              <q-item-section avatar>
                <q-icon class="text-h4 text-white" name="fas fa-arrow-alt-circle-right" />
              </q-item-section>
              <q-item-section class="text-h6 text-white">{{card_item.name}}</q-item-section>
            </q-item>
          </q-list>
          <q-item clickable v-ripple @click="$router.push('/maps')">
            <q-item-section avatar>
              <q-icon class="text-h4 text-white" name="fas fa-arrow-alt-circle-right" />
            </q-item-section>
            <q-item-section class="text-h6 text-white">MAPS</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="$router.push('/')">
            <q-item-section avatar>
              <q-icon class="text-h4 text-white" name="fas fa-arrow-alt-circle-right" />
            </q-item-section>
            <q-item-section class="text-h6 text-white">LOG OUT</q-item-section>
          </q-item>
        </div>
      </div>

      <!--
      <div style="width:250px;background-image: url(statics/imgs/draw.png);object-fit:cover">
        <div class="full-width" style="height:100vh"></div>
      </div>
      -->
    </q-drawer>
    <q-page-container>
      <router-view @listen="drawer($event)" />
    </q-page-container>
  </q-layout>
</template>

<script>
import constant from "@/constant";
export default {
  name: "BasicLayout",

  components: {},

  data() {
    return {
      flag: false,
      card_items: constant.card_items
    };
  },
  methods: {
    drawer(flag) {
      this.flag = !this.flag;
    }
  }
};
</script>
