<template>
  <div class="about">
    <h1>About</h1>
    <p>{{ count }}</p>
    <v-btn @click="incrementAsync">Aumentar</v-btn>
    <h2>READ</h2>
    <v-btn color="primary" @click="loadTasks"> Carregar Tarefas </v-btn>
    <v-list>
      <v-list-item v-for="task in tasks" :key="task.id">
        -{{ task.title }}
      </v-list-item>
    </v-list>
    <h2>CREATE</h2>
    <input type="text" v-model="newTask" placeholder="Nome da tarefa"/>
    <v-btn @click="createTask(newTask)">Criar tarefa</v-btn>
    <h2>UPDATE</h2>
    <select name="" id="">
      <option value="" disabled selected>Selecione uma tarefa</option>
      <option v-for="task in tasks" :key="task.id">
        {{ task.title }}-{{task.id}}
      </option>
    </select>
    <input type="text" v-model="newTitle"  placeholder="Novo título"/>
    <v-btn @click="updateTask(newTitle)">Alterar título</v-btn>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { ref } from "vue";

export default {
  name: "AboutView",
  setup() {
    let newTask = ref("");
    let newTitle = ref("");
    return { newTask, newTitle };
  },
  mounted() {
    this.loadTasks();
  },
  methods: {
    botaoClicado() {
      alert("Quem clicou o botão foi");
    },
    createTask(title) {
      this.$store.dispatch("tasks/createTask", title);
    },
    updateTask(newTitle) {
      this.$store.dispatch("tasks/updateTask", newTitle);
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
