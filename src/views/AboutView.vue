<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
    <v-btn @click="incrementAsync">Aumentar</v-btn>
    <v-btn color="primary" @click="loadTasks"> Carregar Tarefas </v-btn>
    <v-list>
      <v-list-item v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "AboutView",
  methods: {
    botaoClicado() {
      alert("Quem clicou o botão foi");
    },
    loadTasks() {
      this.$store.dispatch("tasks/fetchTasks");
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
