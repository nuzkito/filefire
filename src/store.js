import Vue from 'vue';
import Vuex from 'vuex';
import uniqid from 'uniqid';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fields: JSON.parse(localStorage.getItem('fields')) || [],
        fileContent: localStorage.getItem('fileContent') || '',
    },
    mutations: {
        addNewField(state) {
            state.fields.push({
                id: uniqid(),
                name: 'Nombre del campo',
                startPosition: 1,
                size: 1,
            });
            localStorage.setItem('fields', JSON.stringify(state.fields));
        },
        editField(state, editedField) {
            const index = state.fields.findIndex(function(field) {
                return field.id === editedField.id;
            });
            state.fields.splice(index, 1, editedField);
            localStorage.setItem('fields', JSON.stringify(state.fields));
        },
        deleteField(state, deletingField) {
            const index = state.fields.findIndex(function(field) {
                return field.id === deletingField.id;
            });
            state.fields.splice(index, 1);
            localStorage.setItem('fields', JSON.stringify(state.fields));
        },
        editFileContent(state, fileContent) {
            state.fileContent = fileContent;
            localStorage.setItem('fileContent', fileContent);
        },
    },
    actions: {

    },
});
