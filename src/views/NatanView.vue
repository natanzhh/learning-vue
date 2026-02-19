<template>
  <div class="natan">
    <NavBar/>
    <img alt="Vue logo" src="https://picsum.photos/200/300" />
    <ComponentePai />
    <h1>Página que Natan criou</h1>
    <p>{{count}}</p>

    <MeuBotao texto="Texto1" cor="green" @clicou="botaoClicado" />
    <MeuBotao texto="Texto2" cor="purple" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
      voluptatem veritatis minus molestiae dolorem dolores itaque vel sed
      consectetur nemo, porro eos officia voluptate, similique sequi in cumque
      animi dolore. Fugit eos deserunt, aspernatur cumque ab accusantium fugiat
      similique corporis ipsa facilis tempore explicabo suscipit, consequatur
      totam dolores minima veritatis eius. Non modi accusantium deleniti
      quisquam doloribus tenetur at impedit! Suscipit tempore ipsum sapiente
      quae debitis, beatae laborum, nam alias officia necessitatibus magni
      consequatur eligendi dicta! Ipsum, eum nemo molestias eos voluptatum
      repellat deleniti sapiente iusto excepturi facere quod fugit. Praesentium
      commodi inventore eos iste error mollitia velit perspiciatis deserunt non
      culpa minus aperiam fuga quia dignissimos, veniam saepe sint? Voluptates
      doloribus earum nesciunt qui eius voluptate optio dolor rerum? Sint ex,
      obcaecati ipsa debitis rerum, et quod corrupti aliquam dolor eos quam,
      nemo incidunt blanditiis quae natus reiciendis atque minima ipsum eaque!
      Est cumque, quae dicta fugit aliquam incidunt.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import MeuBotao from "@/components/MeuBotao.vue";
import ComponentePai from "../components/ComponentePai.vue";
import NavBar from "@/components/NavBar.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "NatanView",

  components: {
    MeuBotao,
    ComponentePai,
    NavBar
  },
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
};
</script>
