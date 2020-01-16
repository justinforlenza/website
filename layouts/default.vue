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
        <!-- <div class="seperator" /> -->
        <div>
          <button>
            Contact
          </button>
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

<style lang="postcss" scoped>
nav {
  @apply bg-black text-white flex px-8 h-16 sticky top-0 items-center shadow-lg z-50;
  opacity: .8;
  @screen lg {
    @apply px-16
  }
  @screen xl {
    @apply px-64 !important
  }
  button {
    @apply p-2 border-white border-2 select-none text-center uppercase ml-5 text-base;
  }
  button:active {
    @apply bg-white text-black;
  }
  button:focus {
    @apply outline-none
  }
}

nav > svg {
  @apply h-12;
  fill: white !important;
}

nav > span {
  @apply ml-2 text-lg font-medium select-none hidden;
}

main {
  @apply min-h-screen text-gray-900 -mt-16 bg-gray-200;
}
.spacer {
  @apply flex flex-grow
}

nav > div.navlinks {
  @apply hidden uppercase text-xl h-16 items-center font-medium;
  @screen md {
    @apply flex flex-no-wrap
  }
}

div.navlinks > .seperator::before {
  @apply text-3xl px-2 font-light;
  content: "/"
}

nav a {
  @apply opacity-50 select-none;
}
nav a:hover {
  @apply opacity-75;
}
nav a.active {
  @apply opacity-100;
}
</style>
