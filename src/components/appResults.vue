<script>
import resultFr from './resultFr.vue'
import resultSc from './resultSc.vue'
import resultTr from './resultTr.vue'
export default {
    components:{ resultFr, resultSc, resultTr,}
    
}
</script>
<template>
    <div class="container">

        <resultFr/>
        <resultSc/>
        <resultTr/>
    </div>
</template>
<style lang="scss" scoped>
    @use '../assets/styles/general.scss' as *;
    .container{
        background-color: $c-grey;
    }
</style>