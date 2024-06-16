<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

const submitForm = () => {
  // Perform login logic here
  console.log(`Username: ${username.value}, Password: ${password.value}`);
};
</script>

<style scoped>
.login {
  width: 300px;
  margin: 0 auto;
}

.login div {
  margin-bottom: 10px;
}

.login label {
  display: block;
  margin-bottom: 5px;
}
</style>
