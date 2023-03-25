<template>
<main id="main">
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
    </section>
  <section id="faq" class="faq section-bg">
    <div class="d-flex justify-content-center" v-if="loading">
      <div class="spinner-border" role="status">
        <span class="sr-only">
        </span>
      </div>
    </div>
    <div class="container" data-aos="fade-up" v-else>
      <div class="section-title">
        <p>Fakultetingizni tanlang</p>
      </div>

      <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">

        <li v-for="(fakulty, index) in this.fakulty" :key="index">
          <div class="collapsed question">
            <h3>
              <router-link :to="{ name: 'groups', params: { id: fakulty.id }}">
               <b>{{ index+1 }})</b> {{ fakulty.name }}
              </router-link>
            </h3>
            </div>
        </li>
      </ul>

    </div>
  </section><!-- End F.A.Q Section -->
  </main>
</template>

<script>
import axios from 'axios'
export default {
    name: 'students',
    data(){
        return{
            fakulty: [],
            loading: true,
        }
    },
    mounted(){
        this.getFakulty();
        setTimeout(() => (this.loading = false), 1000);
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