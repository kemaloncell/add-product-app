<template>
  <div class="row product-container">
    <app-porduct v-for="(product, i) in ProductList" :key="i">
      <img class="card-img-top" :src="product.selectedImage" :alt="ProductList.title" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <small> <strong>Adet : </strong> {{ product.count }} </small>
        <br />
        <small> <strong>Fiyat : </strong> {{ product.price }} </small>
        <br />
        <small> <strong>Tutar : </strong> {{ product.totalPrice }} </small>
      </div>
    </app-porduct>
  </div>
</template>

<script>
import Porduct from './Product.vue';
import { eventBus } from '../main';
export default {
  components: {
    appPorduct: Porduct,
  },
  data() {
    return {
      ProductList: [],
    };
  },
  created() {
    // emitlediğimiz datayı $on ile dinliyoruz neyi diniliyoruz ilk parametreyi
    eventBus.$on('productAdded', (product) => {
      this.ProductList.push(product);
    });
  },
};
</script>
