import {
    createMemoryHistory,
    createRouter as _createRouter,
    createWebHistory
  } from 'vue-router'
  
  // Auto generates routes from vue files under ./pages
  // https://vitejs.dev/guide/features.html#glob-import
  //const pages = import.meta.glob('./pages/*.vue')
  const components = import.meta.glob('./components/*.vue')
  
  const routes = Object.keys(components).map((path) => {
    const name = path.match(/\.\/components(.*)\.vue$/)[1].toLowerCase()
    return {
      path: name === '/home' ? '/' : name,
      //component: pages[path] // () => import('./pages/*.vue')
      component: components[path] // () => import('./pages/*.vue')
    }
  })
  
  export function createRouter() {
    return _createRouter({
      // use appropriate history implementation for server/client
      // import.meta.env.SSR is injected by Vite.
      history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
      routes
    })
  }