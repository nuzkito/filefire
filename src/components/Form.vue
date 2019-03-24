<template>
    <form>
        <FixedLengthField v-for="(field, key) in fields" :key="key" :field="field" />
        <button type="button" @click="addNewField">Añadir campo</button>
        <div>
            <textarea cols="80" rows="10" :value="fileContent" @keyup="editFileContent"></textarea>
        </div>
    </form>
</template>

<script>
    import FixedLengthField from './FixedLengthField.vue';

    export default {
        name: 'Form',
        props: {
            fields: Array,
            fileContent: String,
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
