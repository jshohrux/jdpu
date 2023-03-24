<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FlagIcon from 'vue-flag-icon'
// Vue.use(FlagIcon);
</script>

<template>
    <Header />
    <!-- <NavBar /> -->
    <RouterView />
    <Footer/>
</template>

<style scoped>
</style>
