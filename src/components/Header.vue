<template>
    <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="mt-3 mb-2">
        <h1 class="text-light">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="70" height="70">
            <span style="margin-left: 5px" class="mt-2">JDPU</span>
          </RouterLink>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <div class="dropdown">
  <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown"><span class="fi fi-uz"></span> O'zbek
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>

      <!-- <nav id="navbar" class="navbar">
        <ul>
          <li>
            <RouterLink to="/" class="nav-link scrollto">
              Bosh sahifa
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/faculties" class="nav-link scrollto">
              Fakultetlar
            </RouterLink>
          </li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#"> <span class="fi fi-uz"></span>Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li >
            <select class="dropdown getstarted">
              <option value="">fffffffffff</option>
              <option value="">dddddddddd</option>
            </select>
            <span class="fi fi-uz"></span>O'zbek</li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle">
          
        </i>
      </nav> -->

    </div>
  </header><!-- End Header -->
</template>