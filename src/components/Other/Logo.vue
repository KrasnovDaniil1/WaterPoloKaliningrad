<template>
    <router-link class="logo" to="/">
        <svg
            width="50"
            height="48"
            viewBox="0 0 50 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="logo_img"
        >
            <path
                d="M2.50021 36.2501L5.31271 37.7699C7.11271 38.7431 9.13771 38.7431 10.9377 37.7699C12.7377 36.7979 14.7627 36.7979 16.5627 37.7699C18.3627 38.7431 20.3877 38.7431 22.1877 37.7699C23.9877 36.7979 26.0127 36.7979 27.8127 37.7699C29.6127 38.7431 31.6377 38.7431 33.4377 37.7699C35.2377 36.7979 37.2627 36.7979 39.0627 37.7699C40.8627 38.7431 42.8877 38.7431 44.6877 37.7699L47.5002 36.2501M2.50021 43.0001L5.31271 44.5199C7.11271 45.4931 9.13771 45.4931 10.9377 44.5199C12.7377 43.5479 14.7627 43.5479 16.5627 44.5199C18.3627 45.4931 20.3877 45.4931 22.1877 44.5199C23.9877 43.5479 26.0127 43.5479 27.8127 44.5199C29.6127 45.4931 31.6377 45.4931 33.4377 44.5199C35.2377 43.5479 37.2627 43.5479 39.0627 44.5199C40.8627 45.4931 42.8877 45.4931 44.6877 44.5199L47.5002 43.0001M47.0367 29.5001C47.9255 25.1924 47.5542 20.5698 45.698 16.2172C40.8503 4.7793 27.6361 -0.563322 16.2095 4.29555C6.20146 8.54693 0.868961 19.1861 2.93896 29.4326"
                stroke="#FFD842"
                stroke-width="4"
                stroke-miterlimit="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16.0003 4.75C14.2791 12.8162 18.0141 20.6237 25.0003 25M25.0003 25C24.9441 26.5412 24.7078 28.0487 24.3141 29.5M25.0003 25C32.2791 21.13 41.3691 21.7262 47.5003 27.25"
                stroke="#FFD842"
                stroke-width="4"
                stroke-miterlimit="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18.25 16C18.25 16 30.13 6.44879 44.125 13.75M12.625 29.5C9.26125 25.8213 6.1675 20.8263 5.875 13.75M36.5988 22.8513C36.5988 22.8513 36.8463 25.6638 36.1713 29.545"
                stroke="#FFD842"
                stroke-width="4"
                stroke-miterlimit="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <span class="logo_label">
            Водное поло <br />
            Калининград
        </span>
    </router-link>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-yellow) !important;
    .logo_img {
        width: clamp(40px, calc(54vw / var(--ratio)), 54px);
        height: clamp(40px, calc(54vw / var(--ratio)), 54px);
    }
    .logo_label {
        font-family: "Cruinn Black";
        font-size: clamp(10px, calc(14vw / var(--ratio)), 14px);
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

@media screen and (max-width: 450px) {
    .logo {
        .logo_img {
            width: 24px;
            height: 24px;
        }
        .logo_label {
            margin-left: 2px;
            font-size: 8px;
        }
    }
}
</style>
