<template>
  <div style="border: 1px Solid black;">
    <h1>{{ data.Title }}</h1>
    <button @click="$emit('GenericButton-onClick')">Send</button>
    <input type="text">
    <button @click="$emit('GenericButton1-onClick')">Exit</button>
    <p></p>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
 name: 'MyButton',
  props: {
   data:{}
  },
    setup() {
    return {
      
    };
  },
});

</script>