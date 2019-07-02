<template>
  <div>
    <Navbar></Navbar>
    <Nav></Nav>
    <!-- <Navbottom></Navbottom> -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Nav from "@/components/Nav.vue";
// import Navbottom from '@/components/Navbottom.vue'

export default {
  components: {
    Navbar,
    Nav
    // Navbottom
  }
};
</script>
<style>
Navbottom {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
