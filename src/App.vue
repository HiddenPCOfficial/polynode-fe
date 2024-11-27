<script setup lang="ts">
import SimpleDarkMenu from './components/vue-general-components/side-bar/menu/SimpleDarkMenu.vue';

const menuItems = [
    {
        label: 'Home',
        icon: ['fas','fa-home'],
    },
    {
        label: 'Applications',
        icon: ['fas','fa-th'],
        children: ['CRM', 'E-commerce', 'Project Management'],
    },
    {
        label: 'Components',
        icon: ['fas','fa-cubes'],
        children: ['Buttons', 'Cards', 'Modals'],
    },
];
</script>

<template>
    <div class="d-flex h-full">
        <SimpleDarkMenu :menuData="menuItems" />
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>