import {createRouter, createWebHistory} from 'vue-router';

// importo i componenti
import AppHome from './pages/AppHome.vue';
import AppWines from './pages/AppWines.vue';
import SingleWine from './pages/SingleWine.vue';

// definisco il router
const router = createRouter({
  history: createWebHistory(),

  // rotte
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    }, 
    {
      path: '/wines',
      name: 'wines',
      component: AppWines,
    },
    {
      path: '/wines/:id',
      name: 'wines.show',
      component: SingleWine,
    }
  ],
});
export {router};

