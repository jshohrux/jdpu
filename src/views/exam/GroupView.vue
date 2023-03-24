<template>
    <main id="main">
  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <p>Guruxingizni tanlang</p>
      </div>

      <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">

        <li v-for="(group, index) in this.groups" :key="index">
          <div class="collapsed question">
            <h3>
              <router-link :to="{ name: 'table', params: { group_id: group.id }}">
               <b>{{ index+1 }})</b> {{ group.name }}
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
            groups: []
        }
    },
    mounted(){
        this.getGroup();
        console.log(this.groups)
    },
    methods: {
        getGroup(){
            axios.defaults.headers.common = {'Authorization': `Bearer KK4aIC3gN4mWOpgSfutBLCJ5ipn4gnUF`}
            axios.get('https://student.jdpu.uz/rest/v1/data/group-list?page=1&limit=200&_department='+this.$route.params.id).then(res=>{
                this.groups = res.data.data.items
                console.log(res.data.data.items) 
            })
        }
    }
}
    
</script>