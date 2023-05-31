<script>
import trainerFr from './trainerFr.vue'
import trainerSc from './trainerSc.vue'

export default {
    components:{ trainerFr, trainerSc,}
    
}
</script>
<template>
    <trainerFr/>
    <trainerSc/>
</template>
<style lang="scss" scoped>
    @use '../assets/styles/general.scss' as *;
</style>