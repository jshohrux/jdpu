<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <main id="main">
  <section class="services section-bg" style="margin-top: 15%;">
    <div class="container ">
      <div class="row justify-content-between ">
        <div class="col-md-6 col-lg-6 d-flex align-items-stretch">
          <div class="icon-box">
            <RouterLink to="/exams">
            <div class="icon"><i class="bx bx-book-reader"></i></div>
            <h1 class="title">
                Imtihonlar ro'yxati
            </h1>
            <p class="description">Jizzax davlat pedagogika universitetining imtihonlar ro'yxati bilan tanishishingiz mumkin</p>
          </RouterLink>
          </div>
        </div>

        <div class="col-md-6 col-lg-6 d-flex align-items-stretch">
          <div class="icon-box align-items-stretch">
            <RouterLink to="/schedule">
              <div class="icon"><i class="bx bx-grid"></i></div>
              <h4 class="title">Dars jadvali</h4>
              <p class="description">Jizzax davlat pedagogika universiteti dars jadvallari bilan tanishishingiz mumkin</p>
            </RouterLink>
          </div>
        </div>

        <!-- <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
          <div class="icon-box">
            <RouterLink to="/faculties">
              <div class="icon"><i class="bx bx-book-bookmark"></i></div>
              <h4 class="title">Fakultetlar</h4>
              <p class="description">Jizzax davlat pedagogika universiteti fakultetlar ro'yxati bilan tanishishingiz mumkin</p>
            </RouterLink>
          </div>
        </div> -->

      </div>

    </div>
  </section><!-- End Services Section -->

  </main><!-- End #main -->
</template>

<style scoped>
.cards{
  align-items: center;
  min-height: 600px;
}
.section{
  margin-top: 15%;
}
</style>
