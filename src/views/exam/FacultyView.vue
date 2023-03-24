<template>
<main id="main">
  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <p>Fakultetingizni tanlang</p>
      </div>

      <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">

        <li v-for="(fakulty, index) in this.fakulty" :key="index">
          <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">
            <h3>
               <b>{{ index+1 }})</b> {{ fakulty.name }}
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