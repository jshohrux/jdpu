<template>
    <main id="main">
  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <p>Kursni tanlang</p>
      </div>
      <div class="accordion mt-1 mb-1" id="aboutCommeeteAccordion" >
        <div class="card border-0">
          <div class="card-header p-0" id="heading-1" style="line-height: 1;">
            <h2 class="mb-0" style="line-height: 1;">
              <RouterLink :to="{ path: id+'/'+22 }" class="btn btn-link btn-block bg-transparent text-left text-decoration-none p-4 collapsed">
                <h2>1-Kurs</h2>
                <i class="fa fa-chevron-right float-right"></i>                            
              </RouterLink>                    
            </h2>
          </div>   
        </div>

        <div class="card border-0">
          <div class="card-header p-0" id="heading-1" style="line-height: 1;">
            <h2 class="mb-0" style="line-height: 1;">
              <RouterLink :to="{ path: id+'/'+21 }" class="btn btn-link btn-block bg-transparent text-left text-decoration-none p-4 collapsed">
                <h2>2-Kurs</h2>
                <i class="fa fa-chevron-right float-right"></i>                            
              </RouterLink>                    
            </h2>
          </div>   
        </div>

        <div class="card border-0">
          <div class="card-header p-0" id="heading-1" style="line-height: 1;">
            <h2 class="mb-0" style="line-height: 1;">
              <RouterLink :to="{ path: id+'/'+20 }" class="btn btn-link btn-block bg-transparent text-left text-decoration-none p-4 collapsed">
                <h2>3-Kurs</h2>
                <i class="fa fa-chevron-right float-right"></i>                            
              </RouterLink>                    
            </h2>
          </div>   
        </div>

        <div class="card border-0">
          <div class="card-header p-0" id="heading-1" style="line-height: 1;">
            <h2 class="mb-0" style="line-height: 1;">
              <RouterLink :to="{ path: id+'/'+19 }" class="btn btn-link btn-block bg-transparent text-left text-decoration-none p-4 collapsed">
                <h2>4-Kurs</h2>
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
export default{
    name: 'Course',
    data(){
        return {
            id: null
        }
    },
    mounted(){
        this.id = this.$route.params.id
        console.log(this.id)
    }
    }
</script>