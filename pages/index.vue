<template>
  <div id="index">
    <div id="hero">
      <div id="name">
        <h1>Justin Forlenza</h1>
        <h3>Full Stack Developer / I.T. Specialist / Educator</h3>
      </div>
      <div id="image">
        Thing
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<style lang="postcss" scoped>
#hero {
  height: calc(100vh - 4rem);
  @apply px-8 flex flex-wrap flex-col-reverse justify-center;
  @screen lg {
    @apply px-16 flex-row items-center justify-start;
  }
  @screen xl {
    @apply px-64 !important
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
      @apply text-4xl;
      @screen md {
        @apply text-6xl
      }
    }
    h3 {
      @apply text-lg;
      @screen md {
        @apply text-3xl
      }
    }
  }
}
</style>
