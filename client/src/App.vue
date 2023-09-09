<template>
  <ConfigProvider>
   <Layout>
      <LayoutHeader><NavBar /></LayoutHeader>
      <LayoutContent><RouterView /></LayoutContent>
      <LayoutFooter><TheFooter /></LayoutFooter>
    </Layout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, Layout, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
