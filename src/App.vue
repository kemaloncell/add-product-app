<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
    <app-new-product />
    <br /><br />
    <app-progress />
    <br /><br />
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <app-products />
  </div>
</template>

<script>
import NewProduct from './components/NewProduct.vue';
import Products from './components/Products.vue';
import Progress from './components/Progress.vue';

export default {
  components: {
    appNewProduct: NewProduct,
    appProgress: Progress,
    appProducts: Products,
  },

  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
    },
  },
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>
