import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/assets/styles/variables.css";
                    @import "./src/assets/styles/reset.scss";
                    @import "./src/assets/styles/fonts.scss";
            `,
            },
        },
    },
});
