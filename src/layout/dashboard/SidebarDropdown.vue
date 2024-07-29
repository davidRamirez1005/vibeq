<template>
    <div>
      <div @click="toggleDropdown" class="sidebar-dropdown">
        <i :class="icon"></i>
        <p>{{ name }}</p>
        <i class="tim-icons icon-minimal-down"></i>
      </div>
      <div v-if="isOpen" class="sidebar-dropdown-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      icon: String,
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar-dropdown {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .sidebar-dropdown-content {
    padding-left: 20px;
  }
  </style>