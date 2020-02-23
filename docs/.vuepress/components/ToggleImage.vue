<template>
  <a class="toggleImages" @click="toggleImages">
    {{ imageState ? showImages : hideImages }}
  </a>
</template>

<script>
export default {
  name: 'ToggleImage',
  data() {
    return {
      imageState: false
    }
  },
  computed: {
    showImages() {
      return this.$lang === 'English' ? 'Show images' : 'Afficher les images'
    },
    hideImages() {
      return this.$lang === 'English' ? 'Hide images' : 'Masquer les images'
    },
  },
  mounted() {
    // localStorage return a String. !!JSON.parse convert it to Boolean.
    this.imageState = !!JSON.parse(localStorage.getItem('hide-images'))
  },
  watch: {
    imageState() {
      if (this.isLocalStorage())
        localStorage.setItem('hide-images', this.imageState)
      this.$parent.$el.classList.toggle('hide-images')
    }
  },
  methods: {
    toggleImages() {
      this.imageState = !this.imageState
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