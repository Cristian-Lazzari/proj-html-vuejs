<script>
import signUpFr from './signUpFr.vue'
import signUpSc from './signUpSc.vue'
import signUpTr from './signUpTr.vue'
export default {
    components:{ signUpFr, signUpSc, signUpTr,}
    
}
</script>
<template>
    <signUpFr />
    <signUpSc />
    <signUpTr />
</template>
<style lang="scss">
    @use '../assets/styles/general.scss' as *;
</style>