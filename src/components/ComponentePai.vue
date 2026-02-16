<template>
  <div>
    <MeuBotao texto="Salvar" @clicou="salvar" />
  </div>
</template>

<script>
import MeuBotao from "@/components/MeuBotao.vue";

export default {
  name: "ComponentePai",
  components: {
    MeuBotao,
  },
  props: {
    texto: String,
    cor: {
      type: String,
      default: "primary",
    },
  },
  methods: {
  salvar(usuarios) {
    console.log('Quem clicou no botão foi',JSON.stringify(usuarios))
  }
}
};
</script>
<style scoped>
div {
  background-color: red;
}
</style>
