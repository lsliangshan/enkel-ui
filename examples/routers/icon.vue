<template>
    <div>
        <Icon size="40" type="logo-github"></Icon>
        <Icon size="40" type="logo-github"></Icon>
        <Icon svg="github" size="40" color="darkcyan" @click="test"></Icon>
    </div>
</template>

<script>

    export default {
        name: 'icon',
        methods: {
            test (e) {
                console.log('clicked', e);
            }
        }
    };
</script>

<style scoped>

</style>
