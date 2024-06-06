<template>
    <a className="logo" href="#">
        <img src="{logo}" className="logo_img" />
        <span className="logo_label">
            Водное поло <br />
            Калининград
        </span>
    </a>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 216, 66, 1);
    .logo_img {
        width: 54px;
        height: 54px;
    }
    .logo_label {
        font-family: "Cruinn Black"; // скачать
        font-size: 14px;
        text-align: center;
    }
}
@media screen and (max-width: 834px) {
    .logo {
        flex-direction: row;
        .logo_img {
            width: clamp(24px, calc(48vw / var(--ratio)), 48px);
            height: clamp(24px, calc(48vw / var(--ratio)), 48px);
        }
        .logo_label {
            margin-left: 8px;
            font-size: clamp(8px, calc(14vw / var(--ratio)), 14px);
        }
    }
}

@media screen and (max-width: 390px) {
    .logo {
        .logo_img {
            width: 24px;
            height: 24px;
        }
        .logo_label {
            margin-left: 2px;
            font-size: 10px;
        }
    }
}
</style>
