<template>
  <div class="w-full mx-auto p-4 bg-white shadow-md rounded-md h-screen flex flex-col">
    <div class="flex-1 overflow-y-auto w-full flex flex-col-reverse mb-4">
      <div v-for="(message, index) in messages" :key="index" class=" max-w-tg" :class="messageClass(message.sender)">
        <p class="font-bold">{{ message.sender }}:</p>
        <p>{{ message.text }}</p>
      </div>
    </div>
    <div class="mt-4">
      <input
        v-model="input"
        @keyup.enter="sendMessage"
        placeholder="Type your message"
        class="w-full p-2 border rounded"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const input = ref('');
const messages = ref([
  { sender: 'Bot', text: 'Hello! How can I help you today?' }
]);

const sendMessage = () => {
  if (input.value.trim() !== '') {
    messages.value.unshift({ sender: 'You', text: input.value });
    input.value = '';
    // Добавьте ответ бота
    setTimeout(() => {
      messages.value.unshift({ sender: 'Bot', text: 'This is a response from the bot.' });
      scrollToBottom();
    }, 500);
    scrollToBottom();
  }
};

const scrollToBottom = async () => {
  await nextTick();
  const container = document.querySelector('.flex-1');
  container.scrollTop = container.scrollHeight;
};

const messageClass = (sender) => {
  return sender === 'You' ? 
		'self-end text-right bg-blue-100 max-w-1/3 p-2 my-2 rounded-3xl' : 
		'self-start text-left bg-gray-100 max-w-1/3 p-2 my-2 rounded-3xl';
};
</script>
