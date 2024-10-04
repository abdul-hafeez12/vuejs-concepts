<template>
  <div id="app">
   <section class="section">
   <aside class="side"> 
   </aside>
   <section class="contaner">
     <header class="header">Header</header>
     <main class="main"><router-view /></main>
     <footer class="footer">Footer</footer>
   </section>
   </section>
  </div>
</template>
<script>
export default {
  components: {
  },
  setup() {
  
  },
  created() {
 
  },
  beforeUnmount() {
   
  },
  mounted() {
  
  },
  computed: {
  
  },
  methods: {
   
    ///EndMethods///
  },
};
</script>

<style>
body{
  background-color: rgb(0, 99, 99);
  margin: 0%;
  padding: 0%;
  font-family: Arial, Helvetica, sans-serif !important;
}
.section{
  height: 100vh;
  display: flex;
}
.side{
  width: 18%;
  overflow: hidden !important;
  background-color: rgb(170, 193, 199);
  height: 100%;
}
.contaner{
  overflow: hidden !important;
  background-color: rgb(170, 193, 199);
  height: 100%;
  width: 82%;
}
.header{
   padding: 0%;
  margin: 0%;
  height: 5%;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(170, 193, 199);
  z-index: 10;
}
.main{
  height: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 8px;
  padding-left: 8px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  background-color: rgb(180, 182, 180);
}
.footer{
  padding: 0%;
  margin: 0%;
  height: 3.5%;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px inset;
  background-color: rgb(170, 193, 199);
}
</style>