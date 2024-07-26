<template>
  <div id="app">
    <h1>Product Management</h1>
    <CategoryList />
    <AddCategory />
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
import AddCategory from './components/AddCategory.vue';

export default {
  components: {
    CategoryList,
    AddCategory,
  },
};
</script>
