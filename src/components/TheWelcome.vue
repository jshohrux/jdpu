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
  <section id="services" class="services section-bg">
    <div class="container">

      <div class="section-title">
        <p>Bizning xizmatlar</p>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-book-reader"></i></div>
            <h1 class="title">
                <RouterLink to="/exams">
                  Imtixonlar ro'yxati
                </RouterLink>
            </h1>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
          <div class="icon-box">
            <RouterLink to="/schedule">
              <div class="icon"><i class="bx bx-grid"></i></div>
              <h4 class="title"><a href="">Dars jadvali</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
            </RouterLink>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
          <div class="icon-box">
            <RouterLink to="/faculties">
              <div class="icon"><i class="bx bx-book-bookmark"></i></div>
              <h4 class="title"><a href="">Fakultetlar</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Services Section -->

  </main><!-- End #main -->
</template>
