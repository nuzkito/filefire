<template>
    <div>
        <Field label="Nombre del campo" :value="field.name" @change="changeName" />
        <Field label="Posición de inicio" :value="field.startPosition" @change="changeStartPosition" />
        <Field label="Tamaño" :value="field.size" @change="changeSize" />
    </div>
</template>

<script>
    import Field from './Field.vue'

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
        },
        props: {
            field: Object,
        },
        components: {
            Field,
        },
    };
</script>
