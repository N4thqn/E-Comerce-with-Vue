<template>
  <div>
    <h2>Add Category</h2>
    <form @submit.prevent="addCategory">
      <input v-model="name" placeholder="Category Name" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '@/store/useStore';

export default {
  setup() {
    const store = useStore();
    const name = ref('');

    const addCategory = async () => {
      await store.addCategory(name.value);
      name.value = '';
    };

    return {
      name,
      addCategory,
    };
  },
};
</script>
