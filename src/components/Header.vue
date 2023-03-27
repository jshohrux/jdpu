<template>
    <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="mt-3 mb-2">
          <RouterLink to="/">
            <div class="d-flex">
            <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="70" height="70">
            <div class="aligns-items-center ml-5 logo-text pt-1">
              <h3 class="logo-text mb-1 ms-3">
                <span style="margin-left: 5px" class="mt-1">JDPU talabalari uchun</span>
              </h3>
              <span style="margin-left: 5px" class="ms-4">ochiq ma'lumotlar</span>
            </div>
          </div>
          </RouterLink>
      </div>
    </div>
  </header><!-- End Header -->
</template>

<style scoped>
.logo-text{
  font-family: Arial, Helvetica, sans-serif;
  line-height: normal;
  color:rgb(40 91 173);
}
</style>