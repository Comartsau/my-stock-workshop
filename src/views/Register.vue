<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width: 400px">
        <v-img
          class="white--text align-end"
          src="@/assets/login_header.jpg"
          height="200px"
        >
          <v-card-title primary-title> Register </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username -->
            <v-text-field
              v-model="account.username"
              name="Username"
              label="Username"
              id="Username"
              :rules="usernameRules"
            />

            <!-- Password -->
            <v-text-field
              v-model="account.password"
              name="Password"
              label="Password"
              id="Password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              :rules="passwordRules"
            />
            <span>{{ account }}</span>
            <v-row class="justify-space-between px-3">
              <v-btn text @click.prevent="$router.back()">Cancle</v-btn>
              <v-btn type="submit" color="success">Confirm</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword: false,
      account: {
        username: "",
        password: "",
      },
      usernameRules:[v1=>!!v1 || "Username is erquired"],
      passwordRules:[v1=>!!v1 || "Password is erquired", v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters, at least one letter and one number:"]
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.account));
    },
  },
};
</script>

<style>
</style>