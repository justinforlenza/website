<template>
  <div>
    <nav>
      <h1>Justin Forlenza</h1>
      <div class="spacer" />
      <div class="navlinks">
        <div>
          <nuxt-link to="/" exact>
            About
          </nuxt-link>
        </div>
        <div class="seperator" />
        <div>
          <nuxt-link to="/projects">
            Projects
          </nuxt-link>
        </div>
        <div class="seperator" />
        <div>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </div>
      </div>
    </nav>
    <main>
      <nuxt />
    </main>
    <footer />
  </div>
</template>
