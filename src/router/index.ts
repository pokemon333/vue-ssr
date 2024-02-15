import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../components/DetailPage.vue'
import HelloWorld from '../components/HelloWorld.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path : "/",
        name : "root",
        component : HelloWorld
    },
    {
        path  : '/cars/:id',
        name : "detail",
        component : Detail 
    }
  ],
})

export default router;