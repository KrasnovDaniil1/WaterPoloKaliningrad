<script setup>
let links = [
    {
        to: "children",
        name: "Детям",
    },
    {
        to: "amateurs",
        name: "Любителям",
    },
    {
        to: "students",
        name: "Студентам",
    },
    {
        to: "federation",
        name: "Федерация",
    },
    {
        to: "blog",
        name: "Блог",
    },
    {
        to: "contacts",
        name: "Контакты",
    },
];
</script>

<template>
    <router-link v-for="(link, index) in links" :key="index" :to="link.to">{{
        link.name
    }}</router-link>
</template>

<style lang="scss" scoped>
.router-link-active {
    color: var(--color-white-100);
}
</style>
