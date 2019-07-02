<template>
  <!-- Nav -->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- Saldo uang -->
      <b-navbar-brand href="#">Total Uang : Rp,0 </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><b-link to="/Add">Add</b-link></b-nav-item>
          <b-nav-item
            ><b-link to="/Statis_income">Statistik Income</b-link></b-nav-item
          >
          <b-nav-item
            ><b-link to="/statis_expense">Statistik Expense</b-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
