<script setup>
let links = [
    {
        to: "/children",
        name: "Детям",
    },
    {
        to: "/amateurs",
        name: "Любителям",
    },
    {
        to: "/students",
        name: "Студентам",
    },
    {
        to: "/federation",
        name: "Федерация",
    },
    {
        to: "/blog",
        name: "Блог",
    },
    {
        to: "/contacts",
        name: "Контакты",
    },
];
</script>

<template>
    <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="link"
        >{{ link.name }}</router-link
    >
</template>

<style lang="scss" scoped>
.link {
    color: var(--color-white-40);
    font-size: clamp(18px, calc(24vw / var(--ratio)), 24px);
}

@media screen and (max-width: 834px) {
}
@media screen and (max-width: 390px) {
}
</style>
