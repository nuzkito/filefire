<template>
  <div id="app">
    <Form :fields="fields" :fileContent="fileContent" />
    <TableResult :fields="fields" :fileContent="fileContent" />
  </div>
</template>

<script>
    import Form from './components/Form.vue';
    import TableResult from './components/TableResult.vue';

    export default {
        name: 'app',
        computed: {
            fields() {
                return this.$store.state.fields;
            },
            fileContent() {
                return this.$store.state.fileContent;
            },
        },
        created() {
            if (this.$store.state.fields.length === 0) {
                this.$store.commit('addNewField');
            }
        },
        components: {
            Form,
            TableResult,
        },
    };
</script>

<style>
body {
    margin: 0;
    width: max-content;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
