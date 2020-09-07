<template>
  <q-page class="contact_detail">
    <custom-header title="CONTACTS" @click="back()" />
    <q-scroll-area style="height:79vh">
      <center>
        <q-avatar class="q-mt-lg" size="160px">
          <q-img :src="contactInfo.photo" style="width:160px;height:160px;object-fit:contain" />
        </q-avatar>
        <q-item-label class="text-secondary text-h5 q-mt-lg">{{contactInfo.name}}</q-item-label>
        <q-separator class="bg-secondary q-mt-sm" style="height:2px" />
        <q-item-label class="text-body1 text-grey-6 q-mt-md">{{contactInfo.role}}</q-item-label>
        <q-input
          class="contact_email text-h6 q-pt-md q-ml-md q-mr-md text-secondary q-mt-lg"
          disable
          v-model="contactInfo.phone"
          prefix="Phone: "
        />
        <q-input
          class="contact_email text-h6 q-pt-md q-ml-md q-mr-md text-secondary"
          disable
          v-model="contactInfo.email"
          prefix="E-mail: "
        />
        <div class="q-mt-xl q-ml-lg q-mr-lg">
          <q-btn class="text-h6 full-width" outline no-caps color="secondary" label="Phone Call" />
        </div>
        <q-item-label
          class="fixed-bottom text-body1 text-secondary q-mb-lg"
          style="font-weight:bold;text-decoration:underline"
        >Send messge to e-mail</q-item-label>
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
    contactInfo: {
      get() {
        return this.$store.getters["storage/contactInfo"];
      },
      set(val) {
        this.$store.commit("storage/setContactInfo", val);
      }
    }
  },
  created() {
    console.log(this.contactInfo);
  },
  methods: {
    back() {
      this.$router.push("/contact");
    }
  }
};
</script>