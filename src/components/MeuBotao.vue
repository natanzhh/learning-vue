<template>
  <v-btn :color="cor" @click='clicou'>
    {{texto}}
  </v-btn>
</template>

<script>
const usuarios = [
    "natan",
    "helena",
    "joaquim",
    "pedro",
    "luciana"
]
export default {
  name: 'MeuBotao',
  props: {
    texto: String,
    cor: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    clicou() {
      this.$emit('clicou',usuarios)
    }
  }
}
</script>
