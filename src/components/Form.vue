<template>
    <form>
        <FixedLengthField v-for="(field, key) in fields" :key="key" :field="field" v-on:change-field="changeField" />
        <button type="button" v-on:click="$emit('add-field')">Añadir campo</button>
        <div>
            <textarea cols="80" rows="10" :value="fileContent" v-on:keyup="$emit('change-file-content', $event.target.value)"></textarea>
        </div>
    </form>
</template>

<script>
    import FixedLengthField from './FixedLengthField.vue'

    export default {
        name: 'Form',
        props: {
            fields: Array,
            fileContent: String,
        },
        methods: {
            changeField(field) {
                this.$emit('change-field', field);
            },
        },
        components: {
            FixedLengthField
        }
    }
</script>
