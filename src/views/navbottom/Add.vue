<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Add Expense"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label-align-sm="right"
          label-for="nested-amount"
        >
          <!-- <b-form-input id="nested-amount" type="number" placeholder="0"></b-form-input> -->
          <b-input-group>
            <b-input-group-text slot="prepend">Amount</b-input-group-text>
            <b-form-input type="number"></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label-align-sm="right"
          label-for="nested-select"
        >
          <!-- <b-form-select id="nested-note" v-model="selected" :options="options"></b-form-select> -->
          <b-input-group>
            <b-input-group-text slot="prepend">Category</b-input-group-text>
            <b-form-input></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label-align-sm="right"
          label-for="nested-note"
        >
          <!-- <b-form-input id="nested-note" placeholder="note"></b-form-input> -->
          <b-input-group>
            <b-input-group-text slot="prepend">Note</b-input-group-text>
            <b-form-input></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label-align-sm="right"
          label-for="nested-date"
        >
          <!-- <b-form-input id="nested-date" type="date"></b-form-input> -->
          <b-input-group>
            <b-input-group-text slot="prepend">Date</b-input-group-text>
            <b-form-input type="date"></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-form-group>

      <b-button type="submit" block variant="warning"
        ><router-link to="/homepage">Save</router-link></b-button
      >
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Breakfast/Lunch/Dinner" },
        { value: "a", text: "Shopping" },
        { value: "b", text: "Snack" },
        { value: "c", text: "College" }
      ]
    };
  }
};
</script>
