<template>
    <main class="statistics_desktop">
        <div>
            <h2>11+</h2>
            <h3>Полученных наград</h3>
            <!-- <p>Были полученны за успехи на соревнованиях</p> -->
        </div>
        <div>
            <h2>55+</h2>
            <h3>Активных участников</h3>
            <!-- <p>Набор в команду всегда открыт для желающих</p> -->
        </div>
        <div>
            <h2>34+</h2>
            <h3>Сыгранных соревнований</h3>
            <!-- <p>Каждый раз мы растём как настоящая команда</p> -->
        </div>
    </main>
    <main class="statistics_mobile">
        <div>
            <h2>11+</h2>
            <h3>
                Полученных <br />
                наград
            </h3>
            <!-- <p>Были полученны за успехи на соревнованиях</p> -->
        </div>
        <div>
            <h2>55+</h2>
            <h3>
                Активных<br />
                участников
            </h3>
            <!-- <p>Набор в команду всегда открыт</p> -->
        </div>
        <div>
            <h2>34+</h2>
            <h3>
                Сыгранных<br />
                соревнований
            </h3>
            <!-- <p>Каждый раз мы растём как настоящая команда</p> -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
.statistics_mobile {
    display: none;
}
main {
    padding: var(--pm-80-40-20) var(--pm-10-5-2);
    display: flex;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h2 {
            color: var(--color-yellow);
            font-family: "Akrobat ExtraBold";
            font-size: var(--size-128-64-32);
            letter-spacing: 2.56px;
        }
        h3 {
            margin-top: var(--pm-16-8-4);
            color: var(--color-white-100);
            font-family: "Cruinn Black";
            font-size: var(--size-32-20-12);
            letter-spacing: 0.64px;
        }
        p {
            max-width: 300px;
            margin-top: var(--pm-16-8-4);
            color: var(--color-white-60);
            font-family: "Montserrat Regular";
            font-size: var(--size-20-14-10);
            letter-spacing: 0.4px;
            line-height: 1.5;
        }
    }
}
@media screen and (max-width: 834px) {
    .statistics_desktop {
        display: none;
    }
    .statistics_mobile {
        display: flex;
    }
    // main {
    //     grid-gap: var(--pm-40-40-24);
    // }
}
</style>
