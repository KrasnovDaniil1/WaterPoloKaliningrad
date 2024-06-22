<script setup>
import Loader from "./Loader.vue";
import { ref } from "vue";
let props = defineProps({
    link: String,
});

let defaultImg = ref(true);

// setInterval(() => {
//     // defaultImg.value = !defaultImg.value;
//     console.log(props.link);
// }, 500);
</script>

<template>
    <div>
        <Loader v-if="defaultImg" />
        <img
            :src="props.link"
            @load="defaultImg = false"
            v-show="!defaultImg"
        />
    </div>
</template>

<style lang="scss" scoped>
div {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-black);

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
