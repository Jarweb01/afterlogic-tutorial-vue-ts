<template>
  <main>
    <div class="products__container">
      <ProductItem
        v-for="item in products"
        :key="item.id"
        :product-item="item"
        @delete="deleteProduct"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductItem from '@/components/ProductItem.vue'
import { getAllProducts } from '@/services/api/ApiService'
import type { IProduct, getAllProductsResponse } from '@/services/api/types'

type RootData = {
  products: IProduct[]
}

export default defineComponent({
  components: { ProductItem },
  data() {
    return {
      products: []
    } as RootData
  },
  methods: {
    deleteProduct(id: number) {
      console.log('id product for delete', id)
    }
  },
  async mounted() {
    this.products = await getAllProducts().then((res: getAllProductsResponse) => res.data.products)
  }
})
</script>

<style lang="scss">
.products__container {
  display: flex;
  flex-wrap: wrap;
}
</style>
