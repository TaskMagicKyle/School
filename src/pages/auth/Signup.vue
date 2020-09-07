<template>
  <q-page class="flex-center">
    <div class="flex flex-center full-width" style="height:100vh">
      <div class="fixed-bottom q-mb-md full-width flex flex-center">
        <p class="text-grey-8 text-body1">
          Do you have an account?
          <strong class="text-primary" @click="$router.push('/login')">Log in</strong>
        </p>
      </div>
      <center class="full-width" style="margin-bottom:100px">
        <div>
          <q-avatar size="200px">
            <q-img src="statics/imgs/logo.png" />
          </q-avatar>
        </div>
        <div class="q-pt-lg"></div>
        <div class="q-mt-xl q-ml-xl q-mr-xl">
          <q-input class="text-body1 q-pt-lg" autofocus v-model="username" label="Username" />
        </div>
        <div class="q-pt-md"></div>
        <div class="q-mt-xl">
          <q-btn
            class="glossy"
            rounded
            color="blue-7"
            label="Sign up"
            style="width:230px"
            @click="signUp"
            :loading="loading"
          />
        </div>
      </center>
    </div>
  </q-page>
</template>

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
  computed: {
    serverUrl() {
      return this.$store.getters["storage/serverUrl"];
    }
  },
  created() {},
  methods: {
    signUp() {
      if (this.username.length === 0) return;
      const url = this.serverUrl + "/registerUser";
      if (this.loading) return;
      this.loading = true;
      this.$axios
        .post(url, {
          username: this.username,
          password: "123456"
        })
        .then(response => {
          console.log(response);
          this.loading = false;
          if (response.data.error) {
            this.$q.notify({
              classes: "text-weight-bold text-center",
              color: "negative",
              message: response.data.value
            });
            return;
          }
          this.$store.commit("storage/setBucketId", response.data.bucketId);
          this.$store.commit("storage/setBucketName", response.data.bucketName);
          this.$store.commit("storage/setApiUrl", response.data.apiUrl);
          this.$router.push("/my_album");
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  }
};
</script>
