<script setup>
import Header from "./components/Header/Header.vue";
import HeaderMobile from "./components/Header/HeaderMobile.vue";
import FirstWindows from "./components/Other/FirstWindows.vue";

import Footer from "./components/Footer.vue";
</script>

<template>
    <Header />
    <HeaderMobile />
    <FirstWindows />
    <RouterView />
    <Footer />
</template>

<style lang="scss">
// .app {
//     max-width: 1920px;
//     margin: 0 auto;
//     margin: 0 10px;
// }

html {
    background: rgba(4, 29, 86, 1);
}

body {
    max-width: 1920px;
    margin: 0 auto;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    background: #003362;
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    background: white;
}
</style>
