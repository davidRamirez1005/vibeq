import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ "@/pages/views/Dashboard.vue");
const Profile = () =>
  import(/* webpackChunkName: "common" */ "@/pages/views/Profile.vue");
const Pedidos = () =>
  import(/* webpackChunkName: "common" */ "@/pages/views/Pedidos.vue");
const Servicios = () =>
  import(/* webpackChunkName: "common" */ "@/pages/views/Servicios.vue");
const SitioWeb = () =>
  import(/* webpackChunkName: "common" */ "@/pages/views/SitioWeb.vue");
const RegistrarProductos = () =>
  import(/* webpackChunkName: "common" */ "@/pages/views/RegistrarProductos.vue");
const RegistrarServicios = () =>
  import(/* webpackChunkName: "common" */ "@/pages/views/RegistrarServicios.vue");

const routes = [];

// Main routes
routes.push({
  path: "/",
  component: DashboardLayout,
  redirect: "/dashboard",
  children: [
    {
      path: "profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "pedidos",
      name: "pedidos",
      component: Pedidos,
    },
    {
      path: "servicios",
      name: "servicios",
      component: Servicios,
    },
    {
      path: "sitioWeb",
      name: "sitioWeb",
      component: SitioWeb,
    },
    {
      path: "registrar-productos",
      name: "registrar-productos",
      component: RegistrarProductos,
    },
    {
      path: "registrar-servicios",
      name: "registrar-servicios",
      component: RegistrarServicios,
    },
  ],
});

// dashboards routes
routes.push({
  path: "/dashboard",
  component: DashboardLayout,
  redirect: "/dashboard/informes",
  children: [
    {
      path: "informes",
      name: "informes",
      component: Dashboard,
    },
  ],
});

// Marketing routes
routes.push({
  path: "/marketing",
  component: DashboardLayout,
  redirect: "/marketing/enseñanza",
  children: [
    {
      path: "enseñanza",
      name: "enseñanza",
      component: Pedidos,
    },
    {
      path: "cursos",
      name: "cursos",
      component: Pedidos,
    },
  ],
});

// Not found route
routes.push({ path: "*", component: NotFound });

export default routes;