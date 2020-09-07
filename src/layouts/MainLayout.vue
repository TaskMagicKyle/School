<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flex flex-center shadow-0" style="height:80px;">
      <q-toolbar>
        <q-toolbar-title class="text-black flex flex-center" style="font-weight:bold">{{getTitle}}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="q-pb-md bg-white q-pt-sm">
      <q-tabs
        dense
        indicator-color="accent"
        active-color="accent"
        class="bg-white text-grey-5 shadow-2"
      >
        <q-route-tab icon="far fa-life-ring" to="/my_album" label="My Photo" no-caps exact />
        <q-route-tab icon="photo_library" to="/photo_library" label="Library" exact />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  computed: {
    getTitle() {
      return "LIBRARY";
    }
  },
  components: {},
  methods: {
    goTo() {
      this.$router.push("/add_photo");
    },
    back() {
      this.$router.push("/my_album");
    }
  }
};
</script>
