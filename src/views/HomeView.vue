<template>
  <div class="home">
    <h1>Hello Vue Js learning Home Page</h1>
     <button @click="useCase1Clicked">Open New Route</button>
  </div>
</template>

<script>
import { UseCaseLoader} from '../MyCase/mycase.js';

export default {
  name: "HomeView",
  components: {
  },
  methods: {
     useCase1Clicked() {
      UseCaseLoader(this)   
    },
  },
  setup() {
    return {  };
  },
};
</script>
