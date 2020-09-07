<template>
  <q-page class="contact">
    <custom-header title="EVENTS" @click="back()" />
    <q-separator class="bg-secondary q-mt-lg" style="height:2px" />
    <q-scroll-area style="height:82vh">
      <q-list v-for="(event,index) in events" :key="'event'+index">
        <q-item
          class="q-pt-md q-pb-md"
          clickable
          v-ripple
          :active="index%2===0?true:false"
          active-class="bg-grey-2 text-grey-8"
          @click="goTo(event)"
        >
          <q-item-section avatar>
            <q-avatar size="130px">
              <q-img style="width:130px;height:130px;" :src="event.photo" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary text-body1">{{event.title}}</q-item-label>
            <q-item-label class="text-grey-8 text-caption q-pt-sm">{{event.content}}</q-item-label>
            <q-item-label class="text-secondary text-caption q-pt-sm">{{event.date}}</q-item-label>
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
            font-size: 2.115em
</style>
<script>
import CustomHeader from "@/components/Header.vue";
import constant from "@/constant";

export default {
  name: "Contact",
  data() {
    return {
      active: true,
      events: constant.events
    };
  },
  computed: {
    eventInfo: {
      get() {
        return this.$store.getters["storage/eventInfo"];
      },
      set(val) {
        this.$store.commit("storage/setEventInfo", val);
      }
    }
  },
  components: {
    CustomHeader
  },
  methods: {
    back() {
      this.$router.push("/home");
    },
    goTo(event) {
      console.log(event);
      this.eventInfo = event;
      this.$router.push("/event_detail");
    }
  }
};
</script>