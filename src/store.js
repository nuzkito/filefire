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
        visibleFileKey: 0,
    },
    mutations: {
        createFile(state) {
            state.files.push({
                name: 'Sin nombre',
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
        deleteFile(state, fileKey) {
            state.files.splice(fileKey, 1);
            save(state);

            if (state.files.length === 0) {
                this.commit('createFile');
            }

            if (fileKey === state.files.length) {
                this.commit('changeVisibleFile', state.files.length - 1);
            }
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
