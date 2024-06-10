<script setup>
import Logo from "../Other/Logo.vue";
import EmailLink from "../Other/EmailLink.vue";
import MobileLink from "../Other/MobileLink.vue";
import HeaderBurger from "../Header/HeaderBurger.vue";

import BtnSignUp from "../Buttons/BtnSignUp.vue";
import BtnLearnMore from "../Buttons/BtnLearnMore.vue";

import { LINKS_ROUTER } from "../../router";

import { ref } from "vue";
const burger = ref(false);
</script>

<template>
    <header class="header_mobile" :class="{ open: burger }">
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
            <EmailLink class="popup_email" />
            <router-link
                class="popup_router"
                v-for="(link, index) in LINKS_ROUTER"
                :key="index"
                :to="link.to"
                >{{ link.name }}</router-link
            >
            <nav class="popup_block">
                <BtnSignUp />
                <BtnLearnMore />
            </nav>
        </main>
    </header>
</template>

<style lang="scss" scoped>
.header_mobile {
    display: none;
    transition: var(--transition-hover);
    .header_popup {
        width: 100%;
        position: absolute;
        left: 150%;
        // transform: translateX(-50%);
        // transition: var(--transition-hover);

        // height: 0;
        // overflow: hidden;
    }
}
.open {
    background: var(--color-black);
    height: 100vh;
    .header_popup {
        left: 0;
        // left: 50%;
    }
}
@media screen and (max-width: 834px) {
    .header_mobile {
        display: block;
        color: var(--color-white-100);
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
            margin-top: 12px;
            .popup_email {
                font-family: "Cruinn Bold";
                font-size: var(--size-24-24-12);
            }
            .popup_router {
                margin-top: var(--pm-40-40-24);
                color: var(--color-white-40);
                font-family: "Cruinn Black";
                font-size: clamp(24px, calc(36vw / var(--ratio)), 36px);
            }
            .router-link-active {
                color: var(--color-white-100) !important;
            }
            .popup_block {
                margin-top: var(--pm-40-40-24);
                display: flex;
                a:last-child {
                    margin-left: var(--pm-40-40-24);
                }
            }
        }
    }
}
@media screen and (max-width: 450px) {
    .header_mobile {
        .mobile_top {
            padding: 8px 20px;
        }
        .header_popup {
            margin-top: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .popup_router {
                color: var(--color-white-40);
                font-size: 24px;
            }
        }
    }
}
</style>
