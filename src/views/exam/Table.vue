<template>
    <main id="main">
    <section id="faq" class="faq section-bg">
      <div class="d-flex justify-content-center" v-if="data.length==0">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
      <div class="container" data-aos="fade-up" v-else>
        <div class="section-title">
        <p>Imtixonlar ro'yxati</p>
      </div>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Fan</th>
          <th>Semester</th>
          <th>Imtixon turi</th>
          <th>O'qituvchi</th>
          <th>Xona</th>
          <th>Boshlanish vaqti</th>
          <th>Tugash vaqti</th>
          <th>Imtixon sanasi</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in this.data" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ item.subject.name }}</td>
          <td>{{ item.semester.name }}</td>
          <td>{{ item.examType.name }}</td>
          <td>{{ item.employee.name }}</td>
          <td>{{ item.auditorium.name }}</td>
          <td>{{ item.lessonPair.start_time }}</td>
          <td>{{ item.lessonPair.end_time }}</td>
          <td>{{item.examDate}}</td>
        </tr>
        </tbody>
      </table>
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
            data: [],
            times: []
        }
    },
    mounted(){
        this.getData();
        console.log(this.groups)
    },
    methods: {
        getData(){
            axios.defaults.headers.common = {'Authorization': `Bearer KK4aIC3gN4mWOpgSfutBLCJ5ipn4gnUF`}
            axios.get('https://student.jdpu.uz/rest/v1/data/exam-list?_faculty='+this.$route.params.id+'&_group='+this.$route.params.group_id+'&limit=200').then(res=>{
                this.data = res.data.data.items
                console.log(res.data.data.items) 
            })
        }
    }
}
    
</script>

<style scoped>
  table { 
  overflow-x: auto;
  width: 100%; 
  border-collapse: collapse; 
  }
/* Zebra striping */
tr:nth-of-type(odd) { 
  background: #eee; 
}
th { 
  background: rgb(41, 176, 239); 
  color: white; 
  font-weight: bold; 
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}
</style>