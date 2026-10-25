<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <span id="top"></span>
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <Footer />
</template>
