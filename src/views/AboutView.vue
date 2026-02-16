<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{count}}</p>
    <v-btn @click="incrementAsync">Aumentar</v-btn>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";


export default{
  name: "AboutView",
  methods: {
    botaoClicado() {
      alert("Quem clicou o botão foi");
    },
    ...mapMutations(["increment"]),
    ...mapActions(["incrementAsync"]),
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["doubleCount"]),
  },
}
</script>
