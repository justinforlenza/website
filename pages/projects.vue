<template>
  <div>
    <h1>Projects</h1>
    <nuxt-child />
    <div>
      <h1>Projects</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: []
  }),
  async fetch () {
    this.projects = await this.$http.$get('/api/projects')
  }
}
</script>

<style lang="postcss" scoped>
main > div {
  @apply mx-8;
  @apply pt-16;
  @screen lg {
    @apply mx-16;
  }
  @screen xl {
    @apply mx-64
  }
}
</style>
