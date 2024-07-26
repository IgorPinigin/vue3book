<script setup>
import Calculator from './components/Calculator.vue'
import { ref } from 'vue';

const isDarkMode = ref(false);

const toggleTheme = () =>{
  isDarkMode.value = !isDarkMode.value;
}
</script>



<template>
  <div :class="{'dark': isDarkMode}">
    <div class=" h-screen w-screen flex justify-center items-center bg-back-light dark:bg-back-dark transition-colors duration-300 ease-in-out flex-col">
      <button @click="toggleTheme" class="h-10 w-40 px-4 mb-5 rounded-xl bg-phoneBack-light dark:bg-phoneBack-dark text-lg font-semibold dark:text-white transition-colors duration-300 border-2 hover:border-black dark:border-black dark:hover:border-white">{{ isDarkMode ? 'cветлая' : 'темная' }} тема</button>
      <Calculator/>
    </div>
  </div>
  
  
</template>

