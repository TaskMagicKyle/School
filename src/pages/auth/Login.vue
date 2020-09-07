<template>
  <q-page class="login">
    <div class="full-width" style="height:100vh">
      <div class="fixed-bottom q-mb-sm full-width flex flex-center">
        <p
          class="text-teal text-body1"
          style="text-decoration: underline"
          @click="$router.push('/signup')"
        >Forgot password?</p>
      </div>

      <center class="full-width">
        <div>
          <q-img src="statics/imgs/login.png" style="width:100vw;height:42vh" />
        </div>
        <div>
          <div class="q-ml-lg q-mr-lg q-mt-md">
            <q-input class="text-body1 q-pt-md" v-model="username" placeholder="Username" />
          </div>
          <div class="q-ml-lg q-mr-lg">
            <q-input class="text-body1 q-pt-md" v-model="username" placeholder="Password" />
          </div>

          <div class="q-mt-xl q-ml-lg q-mr-lg">
            <q-btn
              @click="$router.push('/home')"
              class="full-width text-h6"
              outline
              color="primary"
              label="Log in"
              :loading="loading"
            />
          </div>
          <div class="q-mt-lg q-ml-lg q-mr-lg">
            <center>
              <q-img src="statics/imgs/lock.png" style="width:70px;" />
            </center>
          </div>
        </div>
      </center>
    </div>
  </q-page>
</template>
<style lang="sass">
.login
  input
    text-align: center
</style>
<script>
const B2 = require("backblaze-b2");

export default {
  name: "PageIndex",
  data() {
    return {
      username: "",
      loading: false
    };
  },
  computed: {},
  created() {
    console.log(this.serverUrl);
  },
  methods: {
    goToAlbum() {}
  }
};
</script>
