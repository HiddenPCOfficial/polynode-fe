<template>
    <nav class="menu bg-gray-900 text-white w-64 h-full">
        <div class="menu-header p-4 text-xl font-bold flex items-center">
            <div class="logo bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span class="text-black font-bold text-lg">R</span>
            </div>
            <span class="ml-4">Rizz</span>
        </div>
        <ul class="menu-list mt-4">
            <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
                <div class="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer" @click="toggleSubMenu(index)">
                    <span :class="item.icon" class="mr-3"></span>
                    <span class="flex-1">{{ item.label }}</span>
                    <span v-if="item.children" class="text-gray-400">▶</span>
                </div>
                <ul v-if="item.children && activeIndex === index" class="submenu bg-gray-800 pl-8 py-2">
                    <li v-for="(subItem, subIndex) in item.children" :key="subIndex" class="submenu-item">
                        <span class="block py-2 hover:text-green-400 cursor-pointer">
                            {{ subItem }}
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Tipizzazione per gli elementi del menu
interface MenuItem {
    label: string;
    icon?: string;
    children?: string[];
}

// Definizione degli elementi del menu
const menuItems: MenuItem[] = [
    {
        label: 'Dashboards',
        icon: 'fas fa-home',
    },
    {
        label: 'Applications',
        icon: 'fas fa-th',
        children: ['App 1', 'App 2', 'App 3'],
    },
    {
        label: 'Components',
        icon: 'fas fa-cubes',
        children: [
            'UI Elements',
            'Advanced UI',
            'Forms',
            'Charts',
            'Tables',
            'Icons',
            'Maps',
            'Email Templates',
        ],
    },
];

// Gestione dello stato per il sottomenu attivo
const activeIndex = ref<number | null>(null);

const toggleSubMenu = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.menu {
    font-family: 'Roboto', sans-serif;
}

.menu-header {
    border-bottom: 1px solid #2d3748;
}

.menu-item {
    border-bottom: 1px solid #2d3748;
}

.submenu {
    border-left: 2px solid #38a169;
}
</style>