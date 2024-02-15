<script setup lang="ts">
import {useHead} from "@vueuse/head"
import { onMounted } from "vue";
onMounted(()=>{
  useHead({
  title : "AutoHub Myanmar",
  meta : [
    {
      name : "description",
      content  :  "One Stop Car Sales"
    },
    {
      property : "og:type",
      content : "website"
    },
    {
      property : "og:image",
      content : "https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium"
    },
    {
      property : "og:url",
      content : 'https://'+ window.location.host
    },
    {
      property : "twitter:title",
      content : "AutoHub Myanmar"
    },
    {
      property : "twitter:description",
      content :  "One Stop Car Sales"
    },
    {
      property : "twitter:image",
      content :  " https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium"
    },
    {
      property : "twitter:card",
      content :   "summary_large_image"
    },
    {
      property  : "twitter:url",
      content  : 'https://'+ window.location.host
    }
  ]
})
})
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
