<script>
export default{

}
</script>
<template>
    <div class="container">
        <h2>WORD CLASS Fitness</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">
        <p class="f-1_1-2"> At Avada Gym, evrything we do from top to bottom is of the highest quality to ensure we're equipped to hel tou rach goals of a heathy and fit lifestyle</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .container{
        @include dfc;
        background-color: $c-grey;
        color: $c-white;
        text-align: center;
        flex-direction: column;
        gap: 2rem;
        padding: 3.5rem;
        position: relative;
        p{
            color: $c-light-grey;
            line-height: 2.2rem;
            max-width: 60%;
        }
    }
    .container::after{
        content: '';
        width: 25px;
        height: 25px;
        transform: rotateZ(45deg);
        position: absolute;
        background-color: $c-grey;
        bottom: -10px;
    }
</style>


