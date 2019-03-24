<template>
    <div class="fields-container">
        <Field label="Nombre del campo" :value="field.name" @change="changeName" />
        <Field label="Posición de inicio" :value="field.startPosition" @change="changeStartPosition" />
        <Field label="Tamaño" :value="field.size" @change="changeSize" />
        <button type="button" @click="deleteField">Eliminar</button>
    </div>
</template>

<script>
    import Field from './Field.vue';

    export default {
        name: 'FixedLengthField',
        methods: {
            changeName(name) {
                this.$store.commit('editField', {
                    ...this.field,
                    name,
                });
            },
            changeStartPosition(position) {
                this.$store.commit('editField', {
                    ...this.field,
                    startPosition: Number(position),
                });
            },
            changeSize(size) {
                this.$store.commit('editField', {
                    ...this.field,
                    size: Number(size),
                });
            },
            deleteField() {
                this.$store.commit('deleteField', this.field);
            },
        },
        props: {
            field: Object,
        },
        components: {
            Field,
        },
    };
</script>

<style scoped>
    .fields-container {
        display: flex;
        flex-direction: column;
        margin: .5em;
    }
</style>
