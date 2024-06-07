<template>
    <a href="https://t.me/waterpolo39_bot" target="_blank" class="btn-blue">
        Записаться
    </a>
</template>

<style lang="scss" scoped>
.btn-sign-training {
    padding: clamp(10px, calc(16vw / var(--ratio)), 16px)
        clamp(36px, calc(56vw / var(--ratio)), 56px);
    font-size: var(--size-24-16-12);
    font-family: "Cruinn Black";
    letter-spacing: 0.48px;
    background: var(--color-blue-100);
    color: var(--color-white-100);
    transition: var(--transition-hover);
    &:hover {
        background: var(--color-white-100);
        color: var(--color-blue-100);
    }
}
@media screen and (max-width: 834px) {
    .btn-sign-training {
        padding: clamp(8px, calc(10vw / var(--ratio)), 10px)
            clamp(22px, calc(36vw / var(--ratio)), 36px);
        // letter-spacing: 0.32px;
    }
}
@media screen and (max-width: 390px) {
    .btn-sign-training {
        padding: 8px calc(22vw / var(--ratio));
        // letter-spacing: 0.16px;
    }
}
</style>
