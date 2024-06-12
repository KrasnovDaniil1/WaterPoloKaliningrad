<script setup>
import SocialNetwork from "./Other/SocialNetwork.vue";

import EmailLink from "./Other/EmailLink.vue";
import Logo from "./Other/Logo.vue";
import MobileLink from "./Other/MobileLink.vue";
import TimeLink from "./Other/TimeLink.vue";
import AddressLink from "./Other/AddressLink.vue";

import { LINKS_ROUTER } from "../router";
import BtnSignUp from "./Buttons/BtnSignUp.vue";
import BtnToMain from "./Buttons/BtnToMain.vue";
</script>

<template>
    <footer className="footer">
        <Logo />
        <nav class="footer_social">
            <p class="social_text">
                Подписывайтесь на наши <br />
                соц. сети
            </p>
            <SocialNetwork />
        </nav>
        <nav class="footer_info">
            <h4 class="block_title">Контакты</h4>
            <MobileLink class="block_text" />
            <EmailLink class="block_text" />
            <h4 class="block_title">Адрес</h4>
            <AddressLink class="block_text" />
            <TimeLink class="block_text" />
        </nav>
        <nav class="footer_router">
            <h4 class="router_title">Меню</h4>
            <router-link
                class="router_link"
                v-for="(link, index) in LINKS_ROUTER"
                :key="index"
                :to="link.to"
                >{{ link.name }}</router-link
            >
        </nav>
        <nav class="footer_sign">
            <h4 class="sign_title">Записаться на тренировку</h4>
            <p class="sign_info">Для записи нажмите на кнопку ниже</p>
            <div class="sign_block">
                <BtnSignUp class="block_btn" />
                <BtnToMain class="block_btn" />
            </div>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
    padding: var(--pm-40-24-16) var(--pm-10-5-2);
    .footer_social {
        .social_text {
            font-family: "Montserrat Regular";
            font-size: clamp(16px, calc(20vw / var(--ratio)), 20px);
            color: var(--color-white-60);
            line-height: 150%;
            margin-bottom: var(--pm-40-24-16);
        }
    }
    .footer_info,
    .footer_router,
    .footer_sign {
        display: flex;
        flex-direction: column;
        .block_title,
        .router_title,
        .sign_title {
            font-family: "Cruinn Black";
            font-size: var(--size-24-20-12);
            color: var(--color-white-80);
            margin-bottom: var(--pm-40-16-8);
        }
        .block_text,
        .router_link {
            font-family: "Cruinn Bold";
            font-size: var(--size-24-16-10);
            color: var(--color-white-40);
        }
    }
    .footer_info {
        .block_title {
            margin-top: auto;
            &:first-child {
                margin-top: 0;
            }
        }
        .block_text {
            &:nth-child(3),
            &:nth-child(6) {
                margin-top: var(--pm-16-8-4);
            }
        }
    }

    .footer_router {
        .router_link {
            &:not(:last-child) {
                margin-bottom: var(--pm-16-8-4);
            }
        }
    }
    .footer_sign {
        .sign_title {
            max-width: var(--width-btn);
        }
        .sign_info {
            max-width: var(--width-btn);
            font-family: "Montserrat Regular";
            font-size: var(--size-16-12-8);
            color: var(--color-white-60);
            line-height: 130%;
            // display: none;
        }
        .sign_block {
            margin-top: var(--pm-40-16-8);
            .block_btn:last-child {
                margin-top: var(--pm-16-8-4);
            }
        }
    }
}
</style>
