<script setup>
import BtnSignUp from "../Buttons/BtnSignUp.vue";
import BtnLearnMore from "../Buttons/BtnLearnMore.vue";
import Logo from "../Other/Logo.vue";
import EmailLink from "../Other/EmailLink.vue";
import MobileLink from "../Other/MobileLink.vue";
import HeaderBurger from "../Other/HeaderBurger.vue";
import SocialNetwork from "../Other/SocialNetwork.vue";

import { LINKS_ROUTER } from "../../router";
import { ref } from "vue";

let burger = ref(false);

function NoScrolling() {
    burger.value = !burger.value;
    let b = document.getElementById("app");
    if (burger.value) {
        b.style = "overflow:hidden; height:100vh";
    } else {
        setTimeout(() => {
            b.style = "overflow:none;";
        }, 100);
    }
}
</script>

<template>
    <header class="header_mobile" :class="burger ? 'open' : 'close'">
        <main class="mobile_top">
            <Logo />
            <MobileLink class="top_mobile" />
            <HeaderBurger @click="NoScrolling" :open="burger" />
        </main>
        <main class="mobile_popup">
            <EmailLink class="popup_email" />
            <router-link
                @click="NoScrolling"
                class="popup_router"
                v-for="(link, index) in LINKS_ROUTER"
                :key="index"
                :to="link.to"
                >{{ link.name }}</router-link
            >
            <nav class="popup_block">
                <BtnSignUp @click="NoScrolling" />
                <BtnLearnMore @click="NoScrolling" />
            </nav>
            <SocialNetwork class="popup_social" />
        </main>
    </header>
</template>

<style lang="scss" scoped>
.header_mobile {
    display: none;
}
.open {
    background: var(--color-black);
    .mobile_popup {
        top: 100%;
    }
}
.close {
    .mobile_popup {
        top: -100vh;
    }
}
@media screen and (max-width: 834px) {
    .header_mobile {
        transition: var(--transition-hover);
        // transition-duration: 1s;
        display: block;
        width: 100vw;
        color: var(--color-white-100);
        position: relative;

        .mobile_top {
            z-index: 1;
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
        .mobile_popup {
            width: 100%;
            height: 100vh;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 12px;
            background: var(--color-black);
            transition: var(--transition-hover);
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
            .popup_social {
                margin-top: var(--pm-40-40-24);
            }
        }
    }
}
@media screen and (max-width: 450px) {
    .header_mobile {
        .mobile_top {
            padding: 8px 20px;
        }
        .mobile_popup {
            padding-top: 0px;
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
