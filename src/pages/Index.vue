<template>
  <q-page class="flex-center"></q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      b2: {}
    };
  },
  created() {
    this.$router.push("/login");
  },
  methods: {}
};
</script>
