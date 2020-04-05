import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('view/home/Home.vue')
const News = () => import('view/news/News.vue')
const Cart = () => import('view/cart/Cart.vue')
const About = () => import('view/about/About.vue')
const Member = () => import('view/member/Member.vue')
const Shop = () => import('view/shop/Shop.vue')
const Share = () => import('view/share/Share.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/share',
    component: Share
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/member",
    component: Member
  },
  {
    path: "/shop",
    component: Shop,
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})



export default router




