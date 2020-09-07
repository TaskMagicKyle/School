<template>
  <q-page class="contact">
    <custom-header title="LINKS" @click="back()" />
    <q-separator class="bg-secondary q-mt-lg" style="height:2px" />
    <q-scroll-area style="height:82vh">
      <q-list v-for="(link,index) in links" :key="'contact'+index">
        <q-item
          class="q-pt-md q-pb-md"
          clickable
          v-ripple
          :active="index%2===0?true:false"
          active-class="bg-grey-2 text-grey-8"
        >
          <q-item-section avatar>
            <q-btn unelevated class="text-grey-7" round icon="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary text-h6">{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>
<style lang="sass">
.contact
    .q-btn
        i
            font-size: 2.915em
</style>
<script>
import CustomHeader from "@/components/Header.vue";
import constant from "@/constant";

export default {
  name: "Contact",
  data() {
    return {
      active: true,
      links: constant.links
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