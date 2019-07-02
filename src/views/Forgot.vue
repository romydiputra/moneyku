<template>
  <div id="navs" class="login">
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <h3 class="mb-4">Reset Your Password</h3>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.confirmpassword"
                  required
                  placeholder="Confirm password"
                ></b-form-input>
              </b-form-group>
              <!-- Button Login -->
              <b-button type="submit" block variant="warning" v-b-modal.modal1
                >Reset Password</b-button
              >
              <hr />
              <div id="text">
                <b-link to="/">Sign In</b-link>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- modal -->
    <b-modal id="modal1" title="Alert">
      Password have change!!
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        password: "",
        confirmpassword: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style>
body {
  background: grey;
}
h3 {
  text-align: center;
}
#text {
  text-align: center;
}
</style>
