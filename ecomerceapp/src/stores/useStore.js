import { defineStore } from 'pinia';
import { useQuery, useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export const useStore = defineStore('main', {
  state: () => ({
    products: [],
    categories: [],
    loading: false,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;
      const { result, error } = useQuery(gql`
        query GetCategories {
          categories {
            id
            name
            products {
              id
              name
              price
            }
            subcategories {
              id
              name
              products {
                id
                name
                price
              }
            }
          }
        }
      `);

      if (error) {
        console.error(error);
      } else {
        this.categories = result.value.categories;
      }
      this.loading = false;
    },
    async addCategory(name) {
      const { mutate } = useMutation(gql`
        mutation AddCategory($name: String!) {
          addCategory(name: $name) {
            id
            name
          }
        }
      `);

      await mutate({ name });
      await this.fetchCategories();
    },
    // Implement other CRUD operations similarly
  },
});
