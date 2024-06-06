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
            <Logo className="test" />
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
        max-width: 1600px;
        margin: 0 auto;
    }

    .header_top {
        justify-content: space-between;
        font-family: "Cruinn Black";
        color: rgb(255, 252, 242);
        .top_right {
            display: flex;
            align-items: center;
            .right_contact {
                padding: 14px 0;
                // font-size: $size-24-24-12;
                &:first-child {
                    padding-right: 30px;
                    border-right: 2px solid rgb(255, 252, 242, 0.1);
                }
                &:last-child {
                    margin-left: 30px;
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
