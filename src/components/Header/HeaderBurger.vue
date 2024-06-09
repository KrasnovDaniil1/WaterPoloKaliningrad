<script setup>
defineProps({
    open: {
        typeof: Boolean,
        default: false,
    },
});
</script>

<template>
    <svg
        v-if="open"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="close"
    >
        <line
            y1="-1"
            x2="27.6489"
            y2="-1"
            transform="matrix(0.690476 -0.723355 0.690476 0.723355 1.90918 22)"
            stroke="#FFFCF2"
            stroke-width="2"
        />
        <line
            y1="-1"
            x2="27.6489"
            y2="-1"
            transform="matrix(0.690476 0.723355 -0.690476 0.723355 1 2)"
            stroke="#FFFCF2"
            stroke-width="2"
        />
        <line
            y1="-1"
            x2="27.6489"
            y2="-1"
            transform="matrix(0.690476 0.723355 -0.690476 0.723355 1 2)"
            stroke="#FFFCF2"
            stroke-width="2"
        />
    </svg>
    <svg
        v-else
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="burger"
    >
        <line y1="1" x2="30" y2="1" stroke="#FFFCF2" stroke-width="2" />
        <line y1="11" x2="30" y2="11" stroke="#FFFCF2" stroke-width="2" />
        <line y1="21" x2="30" y2="21" stroke="#FFFCF2" stroke-width="2" />
    </svg>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 834px) {
    .close {
        width: 20px;
        height: 20px;
    }
    .burger {
        width: 30px;
        height: 20px;
    }
}
@media screen and (max-width: 450px) {
    .close {
        width: 12px;
        height: 12px;
    }
    .burger {
        width: 16px;
        height: 10px;
    }
}
</style>
