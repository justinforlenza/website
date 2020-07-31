<template>
  <div>
    <div>
      <div id="name">
        <h1>Justin Forlenza</h1>
        <h3>Full Stack Developer / I.T. Specialist / Educator</h3>
        <a href="/resume" target="_blank">
          View Resume
        </a>
      </div>
      <div id="image">
        <div />
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<style lang="postcss" scoped>
main > div > div {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%234a5568' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%233b4454' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23596578' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%233a4556' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%236b7689' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23465264' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23808d9e' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%235c687b' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%238e9aac' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23647287' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23a1aebe' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23758398' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-size: cover;
  /* background by SVGBackgrounds.com */
  @apply px-8 flex flex-wrap flex-col-reverse justify-center min-h-screen;
  @screen lg {
    @apply px-16 flex-row items-center justify-start;
  }
  @screen xl {
    @apply px-64
  }
  div {
    @apply flex;
  }
  #name {
    @apply flex-col w-full;
    @screen lg {
      @apply w-3/4;
    }
    h1 {
      @apply text-4xl font-medium;
      line-height: .99;
      letter-spacing: -1.5px;
      @screen md {
        @apply text-6xl;
        letter-spacing: -2px;
      }
    }
    h3 {
      @apply text-lg font-light;
      letter-spacing: -1px;
      @screen md {
        @apply text-2xl;
        letter-spacing: -1.5px;
      }
    }
    a {
      transition: width 0.2s linear;
      @apply w-1/2 p-3 mt-3 border-black border-2 select-none text-center;
      @screen md {
        @apply w-1/4
      }
    }
    a:active {
      @apply bg-black text-white;
    }
    a:focus {
      @apply outline-none
    }
  }
  #image {
    @apply items-center hidden;
    > div {
      @apply w-48 h-48 bg-contain;
      border-radius: 50%;
      background-image: url('~assets/img/profile.jpg');
    }
  }
}
main > div {
  section {
    @apply flex px-8 flex-row-reverse;
    min-height: 15rem;
    @screen lg {
      @apply px-16;
    }
    @screen xl {
      @apply px-64
    }
    h1 {
      @apply text-4xl
    }
    .title {
      @apply w-1/4 text-6xl items-center flex
    }
    .details {
      @apply flex
    }
  }
  section:nth-child(even) {
    @apply bg-gray-900;
  }
  section:nth-child(odd) {
    @apply bg-gray-800;
  }
}
</style>
