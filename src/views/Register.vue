<template>
  <div id="navs" class="register">
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <h3 class="mb-4">Sign Up</h3>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group id="input-group" label="Name" label-for="input">
                <b-form-input
                  id="input"
                  v-model="form.nama"
                  type="text"
                  required
                  placeholder="Enter Name"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Email address"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>
              <div class="d-flex justify-content-between">
                <b-form-group id="input-group-4">
                  <b-form-checkbox-group
                    v-model="form.checked"
                    id="checkboxes-4"
                  >
                    <b-form-checkbox value="me"
                      >I agree to The Terms and Conditions</b-form-checkbox
                    >
                  </b-form-checkbox-group>
                </b-form-group>
                <div>
                  <b-link to="/forgot">Forgot Password</b-link>
                </div>
              </div>
              <!-- Button Login -->
              <b-button type="submit" block variant="warning" v-b-modal.modal1
                >Register</b-button
              >
              <hr />
              <!-- Button Create an account -->
              <b-button type="" block variant="outline-secondary"
                ><router-link to="/">Have an account</router-link></b-button
              >
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- modal -->
    <b-modal id="modal1" title="Alert">
      Register successfully!
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
    //   onReset(evt) {
    //     evt.preventDefault()
    //     // Reset our form values
    //     this.form.email = ''
    //     this.form.password = ''
    //     this.form.checked = []
    //     // Trick to reset/clear native browser form validation state
    //     this.show = false
    //     this.$nextTick(() => {
    //       this.show = true
    //     })
    //   }
  }
};
</script>

<style>
body {
  background: grey;
  /* text-align: left; */
}
h3 {
  text-align: center;
}
</style>
