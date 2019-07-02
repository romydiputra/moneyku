<template>
  <div>
    <!-- <b-nav tabs fill> -->
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Last Month"><p></p></b-tab>
      <b-tab title="This Month" active>
        <Thismonth></Thismonth>
      </b-tab>
      <b-tab title="Future"><p></p></b-tab>
    </b-tabs>
    <!-- </b-nav> -->
  </div>
</template>

<script>
import Thismonth from "@/components/Nav/Thismonth.vue";
export default {
  components: {
    Thismonth
  }
};
</script>

<style>
body {
  background: white;
}
</style>
