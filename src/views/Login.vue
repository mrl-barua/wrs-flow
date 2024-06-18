<script>
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "select2/dist/js/select2.min.js";
import "tilt.js/dest/tilt.jquery.min.js";
import Swal from "sweetalert2";

import { onMounted } from "vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const login = () => {
      if (email.value === "Admin@gmail.com" && password.value === "admin") {
        router.push("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password!",
        });
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img src="../assets/img-01.png" alt="IMG" />
        </div>

        <form class="login100-form validate-form" @submit.prevent="login">
          <span class="login100-form-title"> Member Login </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="Email"
              v-model="email"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password"
              v-model="password"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Login</button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1"> Forgot </span>
            <a class="txt2" href="#"> Username / Password? </a>
          </div>

          <div class="text-center p-t-136">
            <router-link class="txt2" to="/create-account">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5"></i>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../css/login/main.css");
@import url("../css/login/util.css");

/*//////////////////////////////////////////////////////////////////
[ FONT ]*/

@font-face {
  font-family: Poppins-Regular;
  src: url("../fonts/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: Poppins-Bold;
  src: url("../fonts/poppins/Poppins-Bold.ttf");
}

@font-face {
  font-family: Poppins-Medium;
  src: url("../fonts/poppins/Poppins-Medium.ttf");
}

@font-face {
  font-family: Montserrat-Bold;
  src: url("../fonts/montserrat/Montserrat-Bold.ttf");
}

/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/
</style>
