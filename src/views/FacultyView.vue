<template>
    <main id="main">

<!-- ======= Breadcrumbs Section ======= -->
<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Fakultetlar</h2>
      <ol>
        <li><a href="index.html">Bosh sahifa</a></li>
        <li>Fakultetlar</li>
      </ol>
    </div>

  </div>
</section><!-- End Breadcrumbs Section -->

<!-- <section class="inner-page">
  <div class="container">
    <p>
      Example inner page template
    </p>
  </div>
</section> -->

<section class="about">
    <h2 class="text-center">Jizzax davlar pedagogika universitetining fakultetlari ro'yxati</h2>
    <hr>
    <div class="container">
    <div>
        <ol class="gradient-list">
            <li v-for="(fakulty, index) in this.fakulty" :key="index">
                <h4>
                    {{ fakulty.name }}
                </h4>
            </li>
        </ol>
    </div>
    </div>
  </section><!-- End About Section -->

</main><!-- End #main -->
</template>

<script>
import axios from 'axios'
export default {

    name: 'students',
    data(){
        return{
            fakulty: []
        }
    },
    mounted(){
        this.getFakulty();
        console.log(this.fakulty)
    },
    methods: {
        getFakulty(){
            axios.defaults.headers.common = {'Authorization': `Bearer KK4aIC3gN4mWOpgSfutBLCJ5ipn4gnUF`}
            axios.get('https://student.jdpu.uz/rest/v1/data/department-list?page=1&limit=200&_structure_type=11').then(res=>{
                this.fakulty = res.data.data.items
                console.log(res.data.data.items) 
            })
        }
    }
}
    
</script>

<style scoped>
    /*** FONTS ***/
@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);
/*** VARIABLES ***/
/* Colors */
/*** EXTEND ***/
/* box-shadow */
ol.gradient-list > li, ol.gradient-list > li::before {
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
}
/*** STYLE ***/
*, *:before, *:after {
  box-sizing: border-box;
}
/* html, body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #fafafa;
  color: #1d1f20;
  font-family: 'Raleway', sans-serif;
}
main {
  display: block;
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
} */
ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;
  padding-left: 1rem;
}
ol.gradient-list > li {
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  counter-increment: gradient-counter;
  margin-top: 1rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
}
ol.gradient-list > li::before, ol.gradient-list > li::after {
  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);
  border-radius: 1rem 1rem 0 1rem;
  content: '';
  height: 3rem;
  left: -1rem;
  overflow: hidden;
  position: absolute;
  top: -1rem;
  width: 3rem;
}
ol.gradient-list > li::before {
  align-items: flex-end;
  content: counter(gradient-counter);
  color: #1d1f20;
  display: flex;
  font: 900 1.5em/1 'Montserrat';
  justify-content: flex-end;
  padding: 0.125em 0.25em;
  z-index: 1;
}
ol.gradient-list > li:nth-child(10n + 1):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
}
ol.gradient-list > li:nth-child(10n + 2):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
}
ol.gradient-list > li:nth-child(10n + 3):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
}
ol.gradient-list > li:nth-child(10n + 4):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
}
ol.gradient-list > li:nth-child(10n + 5):before {
  background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
}
ol.gradient-list > li:nth-child(10n + 6):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
}
ol.gradient-list > li:nth-child(10n + 7):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
}
ol.gradient-list > li:nth-child(10n + 8):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
}
ol.gradient-list > li:nth-child(10n + 9):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
}
ol.gradient-list > li:nth-child(10n + 10):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0) 0%, rgba(253, 220, 50, 0) 100%);
}
ol.gradient-list > li + li {
  margin-top: 2rem;
}

</style>