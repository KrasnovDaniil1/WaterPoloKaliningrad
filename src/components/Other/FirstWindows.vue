<script setup>
import BtnLearnMore from "../Buttons/BtnLearnMore.vue";
import BtnSignUp from "../Buttons/BtnSignUp.vue";
import { useRoute } from "vue-router";
import LoadImg from "./LoadImg.vue";

import { ref, watch } from "vue";
import Main from "../../assets/images/firstWindow/1.jpg";
import Children from "../../assets/images/firstWindow/2.jpg";
import Amateurs from "../../assets/images/firstWindow/3.jpg";
import Students from "../../assets/images/firstWindow/4.jpg";
import Federation from "../../assets/images/firstWindow/5.jpg";
import Blog from "../../assets/images/firstWindow/6.jpg";
import Contacts from "../../assets/images/firstWindow/7.jpg";

const FIRST_WINDOWS = {
    main: {
        img: Main,
        title: "Начни сегодня!",
        info: "Погружение в мир водных увлечений – это не только способ отдыха, но и настоящее приключение, которое пробуждает чувства и подарит невероятные впечатления!",
    },
    children: {
        img: Children,
        title: "Детям",
        info: "Дорогие дети и родители, представляем вам захватывающий мир водного поло, где вашему ребенку откроются удивительные возможности развития и веселья в водной среде.",
    },
    amateurs: {
        img: Amateurs,
        title: "Любителям",
        info: "Погружение в мир водных увлечений – это не только способ отдыха, но и настоящее приключение, которое пробуждает чувства и подарит невероятные впечатления!",
    },
    students: {
        img: Students,
        title: "Студентам",
        info: "БФУ им. Канта приглашает тебя в нашу сборную по водному поло, где каждый бросок и каждый матч наполняют жизнь увлекательными моментами.",
    },
    federation: {
        img: Federation,
        title: "Федерация",
        info: "Наша федерация посвящена поддержке и развитию водного поло в Калининграде, объединяя в себе профессионалов, любителей и новичков",
    },
    blog: {
        img: Blog,
        title: "Новостной блог",
        info: "Наши спортсмены продолжают покорять водные глубины, устанавливая новые рекорды. Следите за нами, чтобы быть в курсе всех моментов!",
    },
    contacts: {
        img: Contacts,
        title: "Контакты",
        info: "Не стесняйтесь связаться с нами для любых вопросов, комментариев или запросов. Мы готовы делиться радостью водных приключений с вами!",
    },
};

const route = useRoute();
const page = ref(FIRST_WINDOWS["main"]);
watch(
    () => route.name,
    async () => {
        page.value = FIRST_WINDOWS[route.name];
    }
);
</script>
<template>
    <section class="window">
        <img class="window_img" :src="page.img" />
        <div class="window_block">
            <h1 class="block_title">{{ page.title }}</h1>
            <p class="block_info">
                {{ page.info }}
            </p>
            <nav class="block_btn">
                <BtnSignUp />
                <BtnLearnMore />
            </nav>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.window {
    position: relative;
    background: none;
    background: var(--color-black);
    .window_img {
        position: absolute;
        top: 0;
        opacity: 0.5;
        max-height: 100%;
        min-height: 100%;
    }
    .window_block {
        position: relative;
        padding: var(--pm-80-40-20) var(--pm-10-5-2);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .block_title {
            white-space: nowrap;
            font-family: "Akrobat ExtraBold";
            font-size: var(--size-200-96-40);
            color: var(--color-white-100);
        }
        .block_info {
            width: 80%;
            max-width: 840px;
            font-family: "Cruinn Black";
            font-size: var(--size-24-20-12);
            line-height: 1.3;
            color: var(--color-white-80);
            margin: var(--pm-40-24-16) 0;
        }
        .block_btn {
            display: flex;
            grid-gap: var(--pm-40-16-8);
        }
    }
}

@media screen and (max-width: 834px) {
    .window {
        .window_block {
            .block_info {
                width: 90%;
                max-width: 526px;
            }
        }
    }
}

@media screen and (max-width: 450px) {
    .window {
        .window_block {
            .block_info {
                width: 100%;
                max-width: 320px;
            }
        }
    }
}
</style>
