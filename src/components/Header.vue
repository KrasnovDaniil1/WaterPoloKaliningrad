<script setup>
import SocialNetwork from "./SocialNetwork.vue";
import Logo from "./Logo.vue";
</script>

<template>
    <header className="header">
        <main className="header_top">
            <div className="top_right">
                <a href="#" className="right_contact">
                    vodnoepolo39@yandex.ru
                </a>
                <a href="#" className="right_contact"> +7 906 237 65 43 </a>
            </div>
            <SocialNetwork />
        </main>
        <hr className="header_line" />
        <main className="header_bottom">
            <Logo />
        </main>
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
        padding: 0 10px;
        font-family: "Cruinn Black";
    }

    .header_top {
        color: var(--color-text-white-80);
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
                    color: var(--color-text-white-100);
                }
            }
        }
    }
    .header_bottom {
        .test {
            position: absolute;
            top: 0;
            left: 0;
            color: green;
        }
    }
}
</style>
