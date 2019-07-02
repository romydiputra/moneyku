<template>
  <div>
    <Navbar></Navbar>
    <chartjs-doughnut
      v-bind:labels="labels"
      v-bind:option="option"
      v-bind:datasets="datasets"
    ></chartjs-doughnut>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  },

  data() {
    return {
      labels: ["lunch", "dinner", "breakfast"],
      datasets: [
        {
          data: [10, 10, 10],
          backgroundColor: ["Red", "Yellow", "Purple"]
        }
      ],
      option: {
        title: {
          display: true,
          position: "bottom",
          text: "Income"
        }
      }
    };
  }
};
</script>
