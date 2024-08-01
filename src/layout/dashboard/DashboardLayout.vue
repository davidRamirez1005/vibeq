<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <!-- Menú desplegable de informes y estadisticas -->
        <sidebar-dropdown :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36">
          <sidebar-link
            to="/dashboard/informes"
            :name="$t('sidebar.informes')"
            icon="tim-icons icon-chart-bar-32"
          />
        </sidebar-dropdown>
        <sidebar-link
          to="/profile"
          :name="$t('sidebar.userProfile')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/servicios"
          :name="$t('sidebar.servicios')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/pedidos"
          :name="$t('sidebar.pedidos')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/sitioWeb"
          :name="$t('sidebar.sitioweb')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/registrar-productos"
          :name="$t('sidebar.productos')"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/registrar-servicios"
          :name="$t('sidebar.servicios')"
          icon="tim-icons icon-single-02"
        />
        <!-- Menú desplegable de Marketing -->
        <sidebar-dropdown :name="$t('sidebar.marketing')" icon="tim-icons icon-bulb-63">
          <sidebar-link
            to="/marketing/enseñanza"
            :name="$t('sidebar.enseñanza')"
            icon="tim-icons icon-chart-pie-36"
          />
          <sidebar-link
            to="/marketing/cursos"
            :name="$t('sidebar.cursos')"
            icon="tim-icons icon-book-bookmark"
          />
        </sidebar-dropdown>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import SidebarDropdown from "./SidebarDropdown.vue"; 
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    SidebarDropdown
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
