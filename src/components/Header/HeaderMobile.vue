<script setup>
import Logo from "../Other/Logo.vue";
import EmailLink from "../Other/EmailLink.vue";
import MobileLink from "../Other/MobileLink.vue";
import HeaderBurger from "../Header/HeaderBurger.vue";

import { LINKS_ROUTER } from "../../router";

import { ref } from "vue";
const burger = ref(false);
</script>

<template>
    <header class="header_mobile">
        <main class="mobile_top">
            <Logo />
            <MobileLink class="top_mobile" />
            <HeaderBurger
                class="top_burger"
                :open="burger"
                @click="burger = !burger"
            />
        </main>
        <main class="header_popup">
            <EmailLink />
            <router-link
                class="popup_router"
                v-for="(link, index) in LINKS_ROUTER"
                :key="index"
                :to="link.to"
                >{{ link.name }}</router-link
            >
        </main>
    </header>
</template>

<style lang="scss" scoped>
.header_mobile {
    display: none;
    color: var(--color-white-80);
    .mobile_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px clamp(40px, calc(80vw / var(--ratio)), 80px);
        position: relative;
        .top_mobile {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: "Cruinn Bold";
            font-size: var(--size-24-24-12);
        }
    }
    .header_popup {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color-white-40);
        font-size: clamp(18px, calc(24vw / var(--ratio)), 24px);
        .popup_router {
            color: var(--color-white-40);
            font-size: clamp(18px, calc(24vw / var(--ratio)), 24px);
        }
        .router-link-active {
            color: var(--color-white-100);
        }
    }
}
@media screen and (max-width: 834px) {
    .header_mobile {
        display: block;
    }
}
@media screen and (max-width: 450px) {
    .header_mobile {
        .mobile_top {
            padding: 8px clamp(20px, calc(40vw / var(--ratio)), 20px);
        }
    }
}
</style>
