<template>
    <form>
        <div class="fixed-length-fields-container">
            <FixedLengthField v-for="(field, key) in file.lines[0].fields" :key="key" :field="field" />
        </div>
        <button type="button" @click="addNewField">Añadir campo</button>
        <div>
            <textarea cols="80" rows="10" :value="file.content" @keyup="editFileContent"></textarea>
        </div>
    </form>
</template>

<script>
    import FixedLengthField from './FixedLengthField.vue';

    export default {
        name: 'Form',
        props: {
            file: Object,
        },
        methods: {
            addNewField() {
                this.$store.commit('addNewField');
            },
            editFileContent(event) {
                this.$store.commit('editFileContent', event.target.value);
            },
        },
        components: {
            FixedLengthField,
        },
    };
</script>

<style scoped>
    .fixed-length-fields-container {
        display: flex;
    }
    button {
        margin: 0 .5rem;
    }
    textarea {
        width: calc(100% - 1rem);
        box-sizing: border-box;
        margin: .5rem;
    }
</style>
