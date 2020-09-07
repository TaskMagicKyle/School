<template>
  <q-page class="absentee">
    <custom-header title="ABSENTEE" @click="back()" />
    <q-scroll-area style="height:85vh;">
      <center>
        <q-img class="q-mt-lg" src="statics/imgs/absentee_blue.png" style="width:60px;" />
        <q-item-label class="text-secondary text-h6 q-mt-xl">Please fill in all the fields</q-item-label>
        <q-separator class="bg-secondary q-mt-md" style="height:2px" />
        <div>
          <q-input
            class="text-body1 q-pt-xl q-ml-lg q-mr-lg"
            v-model="student_name"
            placeholder="Student Name"
          />
        </div>
        <div>
          <q-input
            class="text-body1 q-pt-md q-ml-lg q-mr-lg"
            v-model="phone"
            placeholder="Contact Phone"
          />
        </div>
        <div>
          <q-input
            class="text-body1 q-pt-md q-ml-lg q-mr-lg"
            v-model="email"
            placeholder="Contact E-mail"
          />
        </div>
        <div>
          <q-input
            class="text-body1 q-pt-md q-ml-lg q-mr-lg"
            v-model="reason"
            placeholder="Please specify reason..."
          />
        </div>
        <q-item class="q-ml-sm q-mr-sm q-mt-lg">
          <q-item-section>
            <q-btn class="full-width q-pt-xs q-pb-xs" color="green" label="Direct Dial" outline />
          </q-item-section>
          <q-item-section class="q-ml-lg">
            <q-btn class="full-width q-pt-xs q-pb-xs" color="primary" label="Submit" outline />
          </q-item-section>
        </q-item>
      </center>
    </q-scroll-area>
  </q-page>
</template>
<style lang="sass">
.absentee
    input
        text-align: center
</style>
<script>
import CustomHeader from "@/components/Header.vue";
export default {
  name: "Absentee",
  data() {
    return {
      student_name: "",
      phone: "",
      email: "",
      reason: ""
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