import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FacultyView from '../views/FacultyView.vue'
import ExamFacultyView from '../views/exam/FacultyView.vue'
import GroupView from '../views/exam/GroupView.vue'
import TableView from '../views/exam/Table.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/faculties',
      name: 'faculties',
      component: FacultyView
    },
    {
      path: '/exams',
      name: 'exams',
      component: ExamFacultyView
    },
    {
      path: '/exams/:id',
      name: 'groups',
      component: GroupView
    },
    {
      path: '/exams/:id/:group_id',
      name: 'table',
      component: TableView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
