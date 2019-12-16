<template>
  <div>
    <nav>
      <logo />
      <span>Justin Forlenza</span>
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

<script>
import logo from '~/assets/svg/logo/icon.svg?inline'

export default {
  components: {
    logo
  }
}
</script>
