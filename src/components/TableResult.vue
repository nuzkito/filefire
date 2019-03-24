<template>
    <table border="1">
        <thead>
            <tr>
                <th v-for="(field, key) in fields" :key="key">{{ field.name }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(line, indexOfLine) in lines" :key="indexOfLine">
                <td v-for="(fieldValue, indexOfField) in line" :key="indexOfField">
                    {{ fieldValue }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

    export default {
        name: 'TableResult',
        props: {
            fields: Array,
            fileContent: String,
        },
        computed: {
            lines() {
                return this.fileContent.split('\n')
                    .filter(line => line)
                    .map(line => {
                        return this.fields.map(field => {
                            return line.substring(
                                field.startPosition - 1,
                                field.startPosition - 1 + field.size
                            );
                        });
                    });
            },
        },
    };

</script>
