import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDGS8c9kdnZuIrUvnlai5x2yoHsBNtQELs",
    authDomain: "vue-crud-f883b.firebaseapp.com",
    projectId: "vue-crud-f883b",
    storageBucket: "vue-crud-f883b.appspot.com",
    messagingSenderId: "711038689151",
    appId: "1:711038689151:web:aa014f512c179a6534444a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
