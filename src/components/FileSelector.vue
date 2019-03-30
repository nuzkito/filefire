<template>
    <nav>
        <span v-for="(file, key) in files" :key="key">
            <button v-if="key === visibleFileKey" disabled>{{ file.name }}</button>
            <button v-else @click="changeVisibleFile(key)">{{ file.name }}</button>
            <button @click="deleteFile(key)">x</button>
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
            visibleFileKey: Number,
        },
        methods: {
            createFile(event) {
                this.$store.commit('createFile');
            },
            changeVisibleFile(fileKey) {
                this.$store.commit('changeVisibleFile', fileKey);
            },
            deleteFile(fileKey) {
                this.$store.commit('deleteFile', fileKey);
            },
        },
    };
</script>
