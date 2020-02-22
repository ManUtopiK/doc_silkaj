<template>
  <a class="toggleImages" @click="toggleImages">
    {{ hideImages ? 'Afficher les images' : 'Masquer les images' }}
  </a>
</template>

<script>
export default {
  data() {
    return {
      hideImages: false
    }
  },
  mounted() {
    // localStorage return a String. !!JSON.parse convert it to Boolean.
    this.hideImages = !!JSON.parse(localStorage.getItem('hide-images'))
  },
  watch: {
    hideImages() {
      if (this.isLocalStorage())
        localStorage.setItem('hide-images', this.hideImages)
      this.$parent.$el.classList.toggle('hide-images')
    }
  },
  methods: {
    toggleImages() {
      this.hideImages = !this.hideImages
    },
    isLocalStorage(){
      var test = 'test';
      try {
          localStorage.setItem(test, test);
          localStorage.removeItem(test);
          return true;
      } catch(e) {
          return false;
      }
    }
  }
}
</script>

<style lang="stylus">
a.toggleImages {
  margin-top -3rem
  float right
  cursor pointer
}
.hide-images img {
  display none
}
</style>