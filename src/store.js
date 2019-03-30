import Vue from 'vue';
import Vuex from 'vuex';
import uniqid from 'uniqid';

Vue.use(Vuex)

function save(state) {
    localStorage.setItem('files', JSON.stringify(state.files));
}

export default new Vuex.Store({
    state: {
        files: JSON.parse(localStorage.getItem('files')) || [],
        fields: JSON.parse(localStorage.getItem('fields')) || [],
        fileContent: localStorage.getItem('fileContent') || '',
        visibleFileKey: 0,
    },
    mutations: {
        addNewFile(state) {
            state.files.push({
                name: 'Archivo 1',
                lines: [
                    {
                        type: 'Línea 1',
                        fields: [
                            {
                                id: uniqid(),
                                name: 'Nombre del campo',
                                startPosition: 1,
                                size: 1,
                            },
                        ],
                    },
                ],
                content: '',
            });
            save(state);
        },
        createFile(state) {
            state.files.push({
                name: 'Archivo',
                lines: [
                    {
                        type: 'Línea 1',
                        fields: [
                            {
                                id: uniqid(),
                                name: 'Nombre del campo',
                                startPosition: 1,
                                size: 1,
                            },
                        ],
                    },
                ],
                content: '',
            });
            save(state);
        },
        changeVisibleFile(state, fileKey) {
            state.visibleFileKey = fileKey;
        },
        addNewField(state) {
            state.files[state.visibleFileKey].lines[0].fields.push({
                id: uniqid(),
                name: 'Nombre del campo',
                startPosition: 1,
                size: 1,
            });
            save(state);
        },
        editField(state, editedField) {
            const index = state.files[state.visibleFileKey].lines[0].fields.findIndex(function(field) {
                return field.id === editedField.id;
            });
            state.files[state.visibleFileKey].lines[0].fields.splice(index, 1, editedField);
            save(state);
        },
        deleteField(state, deletingField) {
            const index = state.files[state.visibleFileKey].lines[0].fields.findIndex(function(field) {
                return field.id === deletingField.id;
            });
            state.files[state.visibleFileKey].lines[0].fields.splice(index, 1);
            save(state);
        },
        editFileContent(state, fileContent) {
            state.files[state.visibleFileKey].content = fileContent;
            save(state);
        },
    },
    actions: {

    },
});
