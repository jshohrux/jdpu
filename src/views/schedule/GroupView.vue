<template>
    <main id="main">
      <section class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Guruhlar</h2>
          <ol>
            <li>
              <router-link to="/">
                Bosh sahifa
              </router-link>
            </li>
            <li>
              <router-link to="/schedule">
                Fakultetlar
              </router-link>
            </li>
            <li>
              <a href="#" @click="$router.back()">
                Kurslar
              </a>
            </li>
            <li>Guruhlar</li>
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
        <p>Guruhingizni tanlang</p>
      </div>
      <div class="accordion mt-4 mb-5" id="aboutCommeeteAccordion" >
        <div class="card border-0" v-for="(item, index) in this.data" :key="index">
          <div class="card-header p-0" id="heading-1" style="line-height: 1;">
            <h2 class="mb-0" style="line-height: 1;">
              <RouterLink :to="{ path: year+'/'+item.id }" class="btn btn-link btn-block bg-transparent text-left text-decoration-none p-4 collapsed">
                <h2><b>{{ index+1 }})</b> {{ item.name }}</h2>
                <i class="fa fa-chevron-right float-right"></i>                            
              </RouterLink>                    
            </h2>
          </div>   
        </div>
      </div>

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
            id: null,
            year: null,
            data: [],
            groups: [],
            loading: true,
        }
    },
    mounted(){
        this.getGroup();
        this.id = this.$route.params.id
        this.year = this.$route.params.year
        setTimeout(() => (this.loading = false), 1000);
        console.log(this.year)
    },
    methods: {
        getGroup(){
            axios.defaults.headers.common = {'Authorization': `Bearer KK4aIC3gN4mWOpgSfutBLCJ5ipn4gnUF`}
            axios.get('https://student.jdpu.uz/rest/v1/data/group-list?page=1&limit=200&_department='+this.$route.params.id).then(res=>{
                this.groups = res.data.data.items
                let arr=[]
                for(let i=0;i<this.groups.length;i++){
                    let t=''
                    let x = this.groups[i].name
                    for(let j=0;j<x.length;j++){
                        if(x[j]=='-'){
                            t+=x[j+1]+x[j+2]
                            break
                        }
                    }
                    console.log(t)
                    if(t==this.year){
                        arr.push(this.groups[i])
                    }
                }
                if(arr.length==0){
                    this.data = this.groups
                }
                else{
                    this.data = arr
                }
                console.log(res.data.data.items) 
            })
        }
    }
}
    
</script>