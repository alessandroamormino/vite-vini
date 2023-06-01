import {createRouter, createWebHistory} from 'vue-router';

// importo i componenti
import AppHome from './pages/AppHome.vue';
import AppWines from './pages/AppWines.vue';
import AppWineries from './pages/AppWineries.vue';
import SingleWine from './pages/SingleWine.vue';
import SingleWinery from './pages/SingleWinery.vue';

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
    }, 
    {
      path: '/wineries',
      name: 'wineries',
      component: AppWineries,
    },
    {
      path: '/wineries/:id',
      name: 'wineries.show',
      component: SingleWinery,
    }, 
  ],
});
export {router};

