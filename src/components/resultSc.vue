<script>
export default{

}
</script>
<template>
    <div class="container">
        <h2>HIGHT PERFORMANCE FACILITIES</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">
        <div class="img-conatiner">
            <img src="../assets/img/home-image1.jpg" alt="">
            <img src="../assets/img/home-image2.jpg" alt="">
            <img src="../assets/img/home-image3.jpg" alt="">
            <img src="../assets/img/home-image4.jpg" alt="">
            <img src="../assets/img/home-image6.jpg" alt="">
            <img src="../assets/img/home-image54.jpg" alt="">
        </div>
    
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .container{
        @include dfc;
        color: $c-white;
        flex-direction: column;
        gap: 2.5rem;
        max-width: 900px;
        margin: 0 auto;
        margin-top: 7rem;
        .img-conatiner{
            @include dfc;
            flex-wrap: wrap;
            gap: 1.3rem;
            img{
                width: 230px;
            }
        }
    }
</style>