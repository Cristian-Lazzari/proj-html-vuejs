<script>
export default{

}
</script>
<template>
    <div class="container">
        <p>Lorem ipsum dolor sit amet, consectetu sapiente reprehenderit pariatur molestiae praesentium quod?</p>
        <p class="f-1_1-5">BRUCE LEE - QUOTE OF THE DAY</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .container{
        @include dfc;
        flex-direction: column;
        gap: 3rem;
        color: $c-white;
        text-align: center;
        background-image: url('../assets/img/home-testimonial-bg.jpg');
        background-size: cover;
        background-position: center;
        height: 250px;
        margin-top: 7rem;
        p{
            max-width: 30%;
        }
    }
</style>