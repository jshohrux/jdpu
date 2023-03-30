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
        <p>Imtihonlar ro'yxati</p>
      </div>
      <div>
        <table class="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Fan</th>
          <th>Semester</th>
          <th>Imtihon turi</th>
          <th>O'qituvchi</th>
          <th>Xona</th>
          <th>Boshlanish vaqti</th>
          <th>Tugash vaqti</th>
          <th>Imtihon sanasi</th>
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
          <td>
            <b>{{ item.lessonPair.start_time }}</b>
          </td>
          <td>
            <b>{{ item.lessonPair.end_time }}</b>
          </td>
          <td>{{this.days[index]}}</td>
        </tr>
        </tbody>
      </table>
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
            data: [],
            times: [],
            days: []
        }
    },
    mounted(){
        this.getData();
        // console.log(this.groups)
    },
    methods: {
        getData(){
            axios.defaults.headers.common = {'Authorization': `Bearer KK4aIC3gN4mWOpgSfutBLCJ5ipn4gnUF`}
            axios.get('https://student.jdpu.uz/rest/v1/data/exam-list?_faculty='+this.$route.params.id+'&_group='+this.$route.params.group_id+'&limit=200').then(res=>{
                this.data = res.data.data.items
                let obj = {}
                let arr=[]
                for(let i=0;i<this.data.length;i++){
                  var timeStamp= this.data[i].examDate * 1000
                  var dateFormat = new Date(timeStamp);
                  let mounth = dateFormat.getMonth()+1
                  arr.push(dateFormat.getDate()+'/'+mounth+'/'+dateFormat.getFullYear())
                }
                this.days = arr;
                console.log(this.days)
                // console.log(res.data.data.items) 
            })
        }
    }
}
    
</script>

<style scoped>
  table { 
    overflow-x: scroll;
    width: 100%; 
    border-collapse: collapse; 
    vertical-align: middle;
  }
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
    text-align: center; 
  }

  @media screen and (max-width: 720px) {
    table {
      display: block;
    }
  }
</style>