
const routes = [
  {
    path: '/',
    component: () => import('layouts/Basic.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/auth/Login.vue') },
      { path: '/signup', component: () => import('pages/auth/Signup.vue') },
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/absentee', component: () => import('pages/Absentee.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/contact_detail', component: () => import('pages/ContactDetail.vue') },
      { path: '/link', component: () => import('pages/Link.vue') },
      { path: '/alert', component: () => import('pages/Alert.vue') },
      { path: '/event', component: () => import('pages/Event.vue') },
      { path: '/event_detail', component: () => import('pages/EventDetail.vue') },
      { path: '/note', component: () => import('pages/Note.vue') },
      { path: '/maps', component: () => import('pages/Map.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
