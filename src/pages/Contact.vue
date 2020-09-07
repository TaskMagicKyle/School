<template>
  <q-page class="contact">
    <custom-header title="CONTACTS" @click="back()" />
    <q-separator class="bg-secondary q-mt-lg" style="height:2px" />
    <q-scroll-area style="height:82vh">
      <q-list v-for="(contact,index) in contacts" :key="'contact'+index">
        <q-item
          class="q-pt-md q-pb-md"
          clickable
          v-ripple
          :active="index%2===0?true:false"
          active-class="bg-grey-2 text-grey-8"
        >
          <q-item-section avatar>
            <q-btn round icon="person_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-secondary text-h6">{{contact.name}}</q-item-label>
            <q-item-label class="text-black text-body1">{{contact.role}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn unelevated round icon="keyboard_arrow_right" @click="goToDetail(contact)" />
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
      contacts: constant.contacts
    };
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
  components: {
    CustomHeader
  },
  methods: {
    back() {
      this.$router.push("/home");
    },
    goToDetail(contact) {
      this.contactInfo = contact;
      this.$router.push("/contact_detail");
    }
  }
};
</script>