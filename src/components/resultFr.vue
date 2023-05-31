<script>
export default{

}
</script>
<template>
    <div class="container">
        <h2>REAL WORD RESULTS</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">
        <div class="card">
            <img src="../assets/img/blog6.jpg" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ut dolores, </p>
            <p>name</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .container{
        @include dfc;
        background-color: $c-white;
        color: $c-white;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2rem;
        max-width: 900px;
        margin: 0 auto;
        .card{
            width: 45%;
            img{
                height: 90px;
            }
        }
    }
</style>