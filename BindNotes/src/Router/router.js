import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/Pages/Login.vue';
import SignUp from '@/Pages/SignUp.vue'; // Example component

const routes = [
  { path: '/', 
    name: 'Login', 
    component: Login },
  { path: '/signup', 
    name: 'SignUp', 
    component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
