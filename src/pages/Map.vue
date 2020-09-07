<template>
  <q-page>
    <custom-header title="MAPS" @click="back()" />
    <div class="fixed-bottom q-mb-md q-ml-xl q-mr-xl">
      <center>
        <q-btn
          class="full-width q-pt-sm q-pb-sm"
          color="secondary"
          outline
          label="VIEW THE MAP OF THE SCHOOL"
        />
      </center>
    </div>
    <q-scroll-area style="height:77vh">
      <center>
        <q-img class="q-mt-lg" src="statics/imgs/map.png" style="width:80px" />
        <q-separator class="bg-secondary q-mt-xl" style="height:2px" />
        <gmap-map
          :options="{zoomControl: false,mapTypeControl: false,fullscreenControl: false,scaleControl: false,streetViewControl: false,}"
          ref="gmap"
          :center="center"
          :zoom="map_zoom"
          :style="mapStyle"
        >
          <gmap-marker :position="center"></gmap-marker>
        </gmap-map>
      </center>
    </q-scroll-area>
  </q-page>
</template>
<style lang="sass">

</style>
<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import CustomHeader from "@/components/Header.vue";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAPTxIcoI8go-2WBGW8REgamepA8FugGOs",
    //   key: "AIzaSyAtkWK4UnWmJbDc7Wp2nJzbSa2-UwQYLBk",
    libraries: "places"
  }
});
export default {
  name: "Maps",
  data() {
    return {
      center: { lat: 51.50853, lng: -0.12574 },
      map_zoom: 14
    };
  },
  computed: {
    mapStyle() {
      return `width:100%;height:56vh`;
    }
  },
  components: {
    CustomHeader
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const that = this;
      navigator.geolocation.getCurrentPosition(
        function(position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;

          that.center = {
            lat: lat,
            lng: lng
          };
          console.log(that.center);
        },
        function(err) {
          alert(err.message);
        }
      );
    },
    back() {
      this.$router.push("/home");
    }
  }
};
</script>