<template>
  <q-page class="contact_detail">
    <custom-header title="EVENTS" @click="back()" />
    <div class="full-width fixed-bottom q-mb-sm">
      <center>
        <q-btn
          color="secondary"
          class="text-body1 q-pt-xs q-pb-xs"
          style="width:87%"
          outline
          label="back to events"
          @click="$router.push('/event')"
        />
      </center>
    </div>
    <q-scroll-area style="height:80vh">
      <center>
        <q-item-label class="text-body1 text-grey-5">{{eventInfo.date}}</q-item-label>
        <q-item-label class="q-pt-md text-h6 text-secondary">{{eventInfo.title}}</q-item-label>
        <q-img :src="eventInfo.photo" class="full-width q-mt-md" />
        <q-item-label
          style="line-height: 1.5rem !important"
          class="text-body1 text-grey-6 q-mt-md q-ml-md q-mr-md"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</q-item-label>
      </center>
    </q-scroll-area>
  </q-page>
</template>
<style lang="sass">
.contact_detail
  .contact_email
    input
      color: #10A8C0
      text-align: right
      padding-right: 15px
      font-size: 18px;
</style>
<script>
import CustomHeader from "@/components/Header.vue";
export default {
  name: "ContactDetail",
  data() {
    return {};
  },
  components: {
    CustomHeader
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
  created() {
    console.log(this.eventInfo);
  },
  methods: {
    back() {
      this.$router.push("/event");
    }
  }
};
</script>