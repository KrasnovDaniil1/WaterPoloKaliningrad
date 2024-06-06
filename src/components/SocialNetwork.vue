<script setup>
import vk from "../assets/icons/vk.svg";
import telegram from "../assets/icons/telegram.svg";
import youTube from "../assets/icons/youtube.svg";
</script>

<template>
    <nav className="social_network">
        <a href="#" target="_blank" className="network_link">
            <img src="{vk}" className="link_img" />
        </a>
        <a href="#" target="_blank" className="network_link">
            <img src="{telegram}" className="link_img" />
        </a>
        <a href="#" target="_blank" className="network_link">
            <img src="{youTube}" className="link_img" />
        </a>
    </nav>
</template>

<style lang="scss" scoped>
.social_network {
    display: flex;
    align-items: center;
    .network_link {
        padding: 4px;
        &:not(:first-child) {
            margin-left: 40px;
        }

        .link_img {
            width: 24px;
        }
    }
}
</style>
