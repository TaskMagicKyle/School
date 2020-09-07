<template>
  <q-item class="q-pt-xl top-header">
    <q-item-section avatar>
      <q-icon
        style="font-size:43px"
        class="text-secondary"
        name="keyboard_arrow_left"
        @click="goTo"
      />
    </q-item-section>
    <q-item-section align="center">
      <q-item-label class="text-h6 text-secondary">{{title}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon style="font-size:42px" class="text-secondary" name="list" />
    </q-item-section>
  </q-item>
</template>
<script>
export default {
  name: "CustomHeader",
  props: ["title", "type"],
  data() {
    return {};
  },
  methods: {
    goTo() {
      this.$emit("click", true);
    }
  }
};
</script>