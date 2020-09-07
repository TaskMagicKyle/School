<template>
  <q-page class="note">
    <custom-header title="NOTICESS" @click="back()" />
    <q-scroll-area style="height:84vh">
      <center>
        <q-img class="q-mt-lg" src="statics/imgs/note_blue.png" style="width:80px"></q-img>

        <q-separator class="bg-secondary q-mt-xl" style="height:2px" />
        <q-list v-for="(note,index) in notes" :key="'alert'+index">
          <q-item
            class="q-pt-md q-pb-md"
            :active="index%2===0?true:false"
            active-class="bg-grey-2 text-grey-8"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-btn size="sm" round class="text-secondary text-body1" icon="fa fa-edit" />
            </q-item-section>
            <q-item-section class="q-mt-sm" align="left">
              <q-item-label>{{note.title}}</q-item-label>
              <q-item-label class="text-caption text-grey-6">{{note.content}} - {{note.date}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </center>
    </q-scroll-area>
  </q-page>
</template>
<style lang="sass">
.note
    .q-btn
        i
            font-size: 1.715em
</style>
<script>
import CustomHeader from "@/components/Header.vue";
import constant from "@/constant";

export default {
  name: "Note",
  data() {
    return {
      notes: constant.notes
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