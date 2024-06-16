<script setup>
import SocialNetwork from "../Other/SocialNetwork.vue";
import BtnSignUp from "../Buttons/BtnSignUp.vue";
import EmailLink from "../Other/EmailLink.vue";
import MobileLink from "../Other/MobileLink.vue";

import Logo from "../Other/Logo.vue";

import { LINKS_ROUTER } from "../../router";
</script>

<template>
    <header className="header">
        <main className="header_top">
            <div className="top_right">
                <EmailLink className="right_contact" />
                <MobileLink className="right_contact" />
            </div>
            <SocialNetwork />
        </main>
        <hr className="header_line" />
        <nav className="header_bottom">
            <Logo />
            <router-link
                class="bottom_router"
                v-for="(link, index) in LINKS_ROUTER"
                :key="index"
                :to="link.to"
                >{{ link.name }}</router-link
            >
            <BtnSignUp />
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    .header_line {
        width: 100%;
        height: 2px;
        background: rgb(255, 252, 242, 0.1);
    }
    .header_top,
    .header_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 var(--pm-10-5-2);
        font-family: "Cruinn Black";
    }

    .header_top {
        color: var(--color-white-80);
        .top_right {
            display: flex;
            align-items: center;
            .right_contact {
                padding: 14px 0;
                font-size: var(--size-24-24-12);
                transition: var(--transition-hover);
                &:first-child {
                    padding-right: 30px;
                    border-right: 2px solid rgb(255, 252, 242, 0.1);
                }
                &:last-child {
                    padding-left: 30px;
                }
                &:hover {
                    color: var(--color-white-100);
                }
            }
        }
    }
    .header_bottom {
        padding: 14px 10px;
        .bottom_router {
            color: var(--color-white-40);
            font-size: clamp(18px, calc(24vw / var(--ratio)), 24px);
        }
        .router-link-active {
            color: var(--color-white-100);
        }
    }
}

@media screen and (max-width: 834px) {
    .header {
        display: none;
    }
}
</style>
