<script setup>
import { ref} from 'vue'
import { evaluate } from 'mathjs';
const calculate = ref('');

const deleteSymbol = () =>{
  calculate.value = calculate.value.slice(0,-1);
};
const goMath = () =>{
  calculate.value = String(evaluate(calculate.value))
  console.log(typeof calculate.value)
};
const addDot = () =>{
  if(calculate.value.includes('.')){
    return
  } else {
    calculate.value+= '.';
  }
};
const addOperator = (oper) =>{
  if ('/-+*'.includes(calculate.value.slice(-1))){
    return
  } else {
    calculate.value+= oper;
  }
};
</script>

<template>
  <div class=" w-full max-w-app min-w-app h-fit aspect-app pb-10 px-8 rounded-calculate bg-phoneBack-light dark:bg-phoneBack-dark shadow-app justify-end flex flex-col items-end transition-colors duration-300 ease-in-out">
    <div class=" text-3xl font-bold text-black dark:text-white transition-colors duration-300">{{ calculate }}</div>
    <div class="grid grid-cols-4 mb-0 gap-4 h-fit w-full mt-32">
      <button class="button-app-sm">e</button>
      <button class="button-app-sm">μ</button>
      <button class="button-app-sm">sin</button>
      <button class="button-app-sm">deg</button>
      <button @click="calculate = ''" class="button-app-md text-gray-400 bg-btnBack-light dark:bg-btnBack-dark aspect-square">Ac</button>
      <button @click="deleteSymbol" class="button-app-md text-gray-400 bg-btnBack-light dark:bg-btnBack-dark aspect-square">&#x232B;</button>
      <button @click="addOperator('/')" class="button-app-md text-textBlue100  bg-btnBackBlue50-light dark:bg-btnBackBlue50-dark aspect-square">/</button>
      <button @click="addOperator('*')" class="button-app-md text-textBlue100 bg-btnBackBlue50-light dark:bg-btnBackBlue50-dark aspect-square">*</button>
      <button @click="calculate+= 7" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">7</button>
      <button @click="calculate+= 8" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">8</button>
      <button @click="calculate+= 9" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">9</button>
      <button @click="addOperator('-')" class="button-app-md text-textBlue100  bg-btnBackBlue50-light dark:bg-btnBackBlue50-dark aspect-square">-</button>
      <button @click="calculate+= 4" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">4</button>
      <button @click="calculate+= 5" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">5</button>
      <button @click="calculate+= 6" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark">6</button>
      <button @click="addOperator('+')" class="button-app-md text-textBlue100  bg-btnBackBlue50-light dark:bg-btnBackBlue50-dark aspect-square">+</button>
      <button @click="calculate+= 1" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">1</button>
      <button @click="calculate+= 2" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">2</button>
      <button @click="calculate+= 3" class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">3</button>
      <button @click="goMath" class="row-span-2 button-app-md text-textBlue50 bg-btnBackBlue100">=</button>
      <button @click="calculate+= 0" class="col-span-2 button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark" bg-btnBack>0</button>
      <button @click="addDot"class="button-app-md text-textBlue100 bg-btnBack-light dark:bg-btnBack-dark aspect-square">.</button>
    </div>
  </div>
</template>

