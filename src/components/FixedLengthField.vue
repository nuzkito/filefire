<template>
    <div>
        <Field label="Nombre del campo" :value="field.name" v-on:change="changeName" />
        <Field label="Posición de inicio" :value="field.startPosition" v-on:change="changeStartPosition" />
        <Field label="Tamaño" :value="field.size" v-on:change="changeSize" />
    </div>
</template>

<script>
    import Field from './Field.vue'

    export default {
        name: 'FixedLengthField',
        methods: {
            changeName(name) {
                this.field.name = name;
                this.$emit('change-field', this.field);
            },
            changeStartPosition(position) {
                this.field.startPosition = Number(position);
                this.$emit('change-field', this.field);
            },
            changeSize(size) {
                this.field.size = Number(size);
                this.$emit('change-field', this.field);
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
