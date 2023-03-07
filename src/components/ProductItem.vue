<template>
    <div class="products__item">
        <span>{{ productItem.title }}</span>
        <img :src="productItem.thumbnail" alt="Product Image">
        <span ref="span" @click="$emit('delete', productItem.id)">delete</span>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useTodoStore} from "@/stores/todo";

const storeTodo = useTodoStore()

defineProps({
    productItem: Object
})

defineEmits(['delete'])

const span = ref(null)

onMounted(() => {
    console.log(span.value?.innerHTML)

    storeTodo.getTodos(3, 10)
})
</script>

<style lang="scss" scoped>
.products__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 300px;
    margin: 16px;
    padding: 16px;
    border-radius: 10px;
    max-width: 400px;
    background: #FFFFFF;
    border: 1px solid #E7E6EB;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

    img {
        width: 50%;
        height: 80%;
        object-fit: cover;
    }
}
</style>