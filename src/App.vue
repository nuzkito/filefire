<template>
  <div id="app">
    <Form :fields="fields" :fileContent="fileContent" v-on:add-field="addField" v-on:change-field="onChangeField" v-on:change-file-content="changeFileContent" />
    <TableResult :fields="fields" :fileContent="fileContent" />
  </div>
</template>

<script>
    import uniqid from 'uniqid';
    import Form from './components/Form.vue'
    import TableResult from './components/TableResult.vue'

    export default {
        name: 'app',
        data() {
            return {
                fields: [],
                fileContent: '',
            }
        },
        methods: {
            addField() {
                this.fields.push({
                    id: uniqid(),
                    name: 'Nombre del campo',
                    startPosition: 1,
                    size: 1,
                });
                localStorage.setItem('fields', JSON.stringify(this.fields));
            },
            onChangeField(editedField) {
                const fields = this.fields;
                const index = this.fields.findIndex(function(field) {
                    return field.id === editedField.id
                });
                fields[index] = editedField;
                this.fields = fields;
                localStorage.setItem('fields', JSON.stringify(this.fields));
            },
            changeFileContent(fileContent) {
                this.fileContent = fileContent;
                localStorage.setItem('fileContent', fileContent);
            },
        },
        created() {
            const fields = JSON.parse(localStorage.getItem('fields'));
            if (fields) {
                this.fields = fields;
            } else {
                this.addField();
            }

            this.fileContent = localStorage.getItem('fileContent') || '';
        },
        components: {
            Form,
            TableResult
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
