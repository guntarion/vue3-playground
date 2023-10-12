import { createRouter, createWebHistory } from 'vue-router';
import PictureVoteFeature from './components/PictureVote/PictureVoteFeature.vue';
import QuizMain from './components/Quiz/QuizMain.vue';  
import FormBinding from './components/FormBinding.vue';  
import ListOfItem from './components/SimpleComponent/ListMain.vue';  
import GridSortFilter from './components/GridSortFilter/GridSortFilterMain.vue';  

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/picture-vote',
      component: PictureVoteFeature
    },
    {
      path: '/quiz',
      component: QuizMain
    },
    {
      path: '/form-binding',
      component: FormBinding
    },
    {
      path: '/list-item',
      component: ListOfItem
    },
    {
      path: '/grid-sort-filter',
      component: GridSortFilter
    }
  ]
});

export default router;
