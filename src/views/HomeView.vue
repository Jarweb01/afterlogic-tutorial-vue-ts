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

<script>
import ProductItem from "@/components/ProductItem.vue";
import {getAllProducts} from "@/services/api/ApiService.js";

export default {
    components: {ProductItem},
    data() {
        return {
            products: [],
        }
    },
    methods: {
        deleteProduct(id) {
            console.log('id product for delete', id)
        }
    },
    async mounted() {
        this.products = await getAllProducts().then((res) => res.data.products)
    }
}
</script>

<style lang="scss">
.products__container {
    display: flex;
    flex-wrap: wrap;
}
</style>