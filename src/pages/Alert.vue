<template>
  <q-page class="alert">
    <custom-header title="ALERTS" @click="back()" />
    <q-scroll-area style="height:84vh">
      <center>
        <q-img class="q-mt-lg" src="statics/imgs/alert_blue.png" style="width:80px"></q-img>
        <q-item-label class="text-body2 text-grey-8 q-mt-xl">
          You received
          <strong class="text-body2 text-secondary">5</strong> notifications
        </q-item-label>
        <q-separator class="bg-secondary q-mt-xl" style="height:2px" />
        <q-list v-for="(alert,index) in alerts" :key="'alert'+index">
          <q-item
            class="q-pt-md q-pb-md"
            :active="index%2===0?true:false"
            active-class="bg-grey-2 text-grey-8"
          >
            <q-item-section avatar>
              <q-btn round class="text-secondary" icon="error_outline" />
            </q-item-section>
            <q-item-section class="q-mt-sm">
              <q-item-label>{{alert.title}}</q-item-label>
              <q-item-label class="text-caption text-grey-6">{{alert.time}} - {{alert.date}}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" style="font-size:3.3em" />
            </q-item-section>
          </q-item>
        </q-list>
      </center>
    </q-scroll-area>
  </q-page>
</template>
<style lang="sass">
.alert
    .q-btn
        i
            font-size: 2.515em
</style>
<script>
import CustomHeader from "@/components/Header.vue";
import constant from "@/constant";

export default {
  name: "Alert",
  data() {
    return {
      alerts: constant.alerts
    };
  },
  components: {
    CustomHeader
  },
  methods: {
    back() {
      this.$router.push("/home");
    }
  }
};
</script>