<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <div>{{ category.name }}</div>
        <ul>
          <li v-for="product in category.products" :key="product.id">
            {{ product.name }} - {{ product.price | currency }}
          </li>
          <li v-for="subcategory in category.subcategories" :key="subcategory.id">
            <div>{{ subcategory.name }}</div>
            <ul>
              <li v-for="product in subcategory.products" :key="product.id">
                {{ product.name }} - {{ product.price | currency }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from '@/store/useStore';

export default {
  setup() {
    const store = useStore();
    store.fetchCategories();

    return {
      categories: store.categories,
    };
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>
