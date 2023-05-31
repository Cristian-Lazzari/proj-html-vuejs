<script>
import appSignup from './appSignup.vue'
import appResults from './appResults.vue'
import appTrainer from './appTrainer.vue'
export default {
    components:{ appSignup, appResults, appTrainer}
}
</script>

<template>
    <div class="container">
        <appSignup/>
        <appResults/>
        <appTrainer/>
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/styles/general.scss' as *;
</style>