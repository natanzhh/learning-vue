<template>
  <div class="about">
    <NavBar />
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
    <input type="text" v-model="newTask" placeholder="Nome da tarefa" />
    <v-btn @click="createTask(newTask)">Criar tarefa</v-btn>
    <h2>UPDATE</h2>
    <select name="" id="" v-model="taskId">
      <option value="" disabled selected>Selecione uma tarefa</option>
      <option v-for="task in tasks" :key="task.id" :value="task.id">
        {{ task.title }}-{{ task.id }}
      </option>
    </select>
    <input type="text" v-model="newTitle" placeholder="Novo título" />
    <v-btn @click="updateTask(taskId, newTitle)">Alterar título</v-btn>
    <h2>DELETE</h2>
    <select name="" id="" v-model="idToDelete">
      <option value="" disabled selected>Selecione um tarefa</option>
      <option v-for="task in tasks" :key="task.id" :value="task.id">
        {{ task.title }}-{{ task.id }}
      </option>
    </select>
    <v-btn @click="deleteTask(idToDelete)">Apagar tarefa</v-btn>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AboutView",
  components: { NavBar },
  setup() {
    let newTask = ref("");
    let newTitle = ref("");
    let taskId = ref(null);
    let idToDelete = ref(null);
    return { newTask, newTitle, taskId, idToDelete };
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
    updateTask(taskId, newTitle) {
      console.log("O valor de newTitle no arquivo AboutView é", newTitle);
      const payload = { taskId: taskId, newTitle: newTitle };
      this.$store.dispatch("tasks/updateTask", payload);
    },
    loadTasks() {
      this.$store.dispatch("tasks/fetchTasks");
    },
    deleteTask(id) {
      this.$store.dispatch("tasks/deleteTask", id);
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
