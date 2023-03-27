<template>
    <!-- ======= Footer ======= -->
  <footer id="footer">
<div class="container py-4 text-center">
  <div class="copyright">
    Raqamli ta'lim texnologiyalari markazi <strong>JDPU &copy;{{this.year}}</strong>
  </div>
</div>
</footer><!-- End Footer -->
</template>

<script>
export default{
  data(){
    return{
      year: null
    }
  },
  mounted(){
      this.getYear();
      console.log(this.year)
  },
  methods: {
    getYear(){
      var currentTime = new Date()
      var year = currentTime.getFullYear()
      this.year = year
    }
  }
}
</script>

<style scoped>
  .footer{
    align-items: center;
  }
</style>