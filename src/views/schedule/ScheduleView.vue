<template>
    <main id="main">
      
      <section id="faq" class="faq section-bg">
    
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <p>Dars jadvali</p>
          </div>
    
        <div class="container p-0" v-if="data.length!==0">
            <div class="row item mb-4" v-for="(value, keyob) in this.days">
                <div class="col-12 col-md-1 py-4 d-flex align-items-center justify-content-center" style="background-color: #285bad9e;">
                    <p class="m-0 writing-mode vertical-text" >
                        {{ value }}
                    </p>
                </div>
                <div class="col-12 col-md-11 d-flex py-1 align-items-center justify-content-center">
                    <table class="table table-striped" style="overflow-x: scroll">
                        <thead>
                            <tr style="background-color: #285bad9e;">
                                <th scope="col" style="font-weight: 500">#</th>
                                <th scope="col" style="font-weight: 500">Kirish</th>
                                <th scope="col" style="font-weight: 500">Chiqish</th>
                                <th scope="col" style="font-weight: 500">Fan nomi</th>
                                <th scope="col" style="font-weight: 500">Xona</th>
                                <th scope="col" style="font-weight: 500">Mashg'ulot turi</th>
                                <th scope="col" style="font-weight: 500">O'qituvchi</th>
                            </tr>
                        </thead>
                        <tbody v-for="(data, index) in this.data" :key="index">
                            <tr v-if="data.lesson_date==keyob">
                                <th scope="row">{{index}}</th>
                                <td>{{data.lessonPair.start_time}}</td>
                                <td>{{data.lessonPair.end_time}}</td>
                                <td>{{ data.subject.name }}</td>
                                <td>{{ data.auditorium.name }}</td>
                                <td>{{ data.trainingType.name }}</td>
                                <td>{{ data.employee.name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-else>
            <h2>Sizda Dars jadvali shakllanmagan</h2>
        </div>
        </div>
      </section><!-- End F.A.Q Section -->
      </main>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
            id: null,
            year: null,
            semester: null,
            groupId: null,
            lenght: null,
            data: [],
            days: {}
        }
    },
    mounted(){
        this.id = this.$route.params.id
        this.year = this.$route.params.year
        this.semester = this.$route.params.semester
        this.groupId = this.$route.params.group_id
        this.getTable();
    },
    methods: {
        getTable(){
            const date = new Date();
            const startOfWeek = new Date(date.setHours(0,0,0,0));
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()+1);
            const endOfWeek = new Date(date.setHours(0,0,0,0));
            endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay()));
            let begin = Date.parse(startOfWeek)/1000
            let end = Date.parse(endOfWeek)/1000
            axios.defaults.headers.common = {'Authorization': `Bearer KK4aIC3gN4mWOpgSfutBLCJ5ipn4gnUF`}
            axios.get('https://student.jdpu.uz/rest/v1/data/schedule-list?_faculty='+this.id+'&_group='+this.groupId+'&lesson_date_to='+end+'&lesson_date_from='+begin).then(res=>{
                this.data = res.data.data.items
                let obj = {}
                let arr=[]
                arr = ['Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba']
                let j=1
                obj[this.data[0].lesson_date] = 'Dushanba'
                for(let i=1;i<this.data.length;i++){
                    if(this.data[i].lesson_date!==this.data[i-1].lesson_date){
                        obj[this.data[i].lesson_date] = arr[j]
                        j++;
                    }
                }
                this.days = obj
                console.log(obj)
            })
            
        },

    }
}
</script>


<style scoped>
    table{
        overflow-x: scroll;
        width: 100%; 
        border-collapse: collapse; 
    }

    @media screen and (max-width: 720px) {
        table {
        display: block;
        }
    }
    h2{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
    }
</style>