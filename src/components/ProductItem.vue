<template>
  <div class="products__item">
    <span>{{ productItem.title }}</span>
    <img :src="productItem.thumbnail" alt="Product Image" />
    <span ref="span" @click="$emit('delete', productItem.id)">delete</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IProduct } from '@/services/api/types'
import { useTodoStore } from '@/stores/todo'

const storeTodo = useTodoStore()

defineProps<{
  productItem: IProduct
}>()

defineEmits<{
  (e: 'delete', id: number): void
}>()

const span = ref<HTMLSpanElement | null>(null)

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
  background: #ffffff;
  border: 1px solid #e7e6eb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  img {
    width: 50%;
    height: 80%;
    object-fit: cover;
  }
}
</style>
