<script>
import AppHeader from './components/header.vue'
import AppMain from './components/main.vue'
import AppFooter from './components/footer.vue'
export default {
  components:{ AppHeader, AppMain, AppFooter },
  data(){
    return{
      pageMenuArr:[
        {
          active: true,
          title:'HOME',
        },
        {
          active: false,
          title:'ABOUT US',
        },
        {
          active: false,
          title:'FACILITIES',
        },
        {
          active: false,
          title:'MERBERSHIP',
        },
        {
          active: false,
          title:'TESTIMONIAL',
        },
        {
          active: false,
          title:'BLOG',
        },
  
        ]
    }
  }
}
</script>
<template>
 <AppHeader
 :arr="pageMenuArr"/>
 
</template>
<style lang="scss">
@use './assets/styles/general.scss' as *;
/***bottni***/
.btn-1{
    background-color: rgba(255, 255, 255, 0);
    color: $c-light-grey;
    border: 1px solid $c-light-grey;
    padding: 1em 2em ;
}
</style> 