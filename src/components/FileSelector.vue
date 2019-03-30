<template>
    <nav>
        <span v-for="(file, key) in files" :key="key">
            <button>{{ file.name }}</button>
            <button>x</button>
            |
        </span>
        <button @click="createFile">Nuevo archivo</button>
    </nav>
</template>

<script>
    export default {
        name: 'FileSelector',
        props: {
            files: Array,
        },
        methods: {
            createFile(event) {
                this.$store.commit('createFile');
            },
        },
    };
</script>
