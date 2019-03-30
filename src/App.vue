<template>
  <div id="app">
    <FileSelector :files="files" />
    <Form :files="files" />
    <TableResult :files="files" />
  </div>
</template>

<script>
    import FileSelector from './components/FileSelector.vue';
    import Form from './components/Form.vue';
    import TableResult from './components/TableResult.vue';

    export default {
        name: 'app',
        computed: {
            files() {
                return this.$store.state.files;
            },
        },
        created() {
            if (this.$store.state.files.length === 0) {
                this.$store.commit('addNewFile');
            }
        },
        components: {
            FileSelector,
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
