<template>
  <div class="login">
    <h1>Register</h1>
    <input type="text" placeholder="Usuário" v-model="username" /><br />
    <input type="text" placeholder="Senha" v-model="password" /><br /><br />
    <v-btn @click="register(username, password)">Registrar</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { ref } from "vue";

export default {
  name: "RegisterView",
  components: {},
  setup() {
    let username = ref("");
    let password = ref("");
    return { username, password };
  },
  methods: {
    register(title) {
      this.$store.dispatch("tasks/createTask", title);
    },
    ...mapMutations(["increment"]),
    ...mapActions(["incrementAsync"]),
  },

  computed: {
    ...mapState(["count"]),
    ...mapState("tasks", ["tasks"]),
    ...mapGetters(["doubleCount"]),
  },
};
</script>
