<script>
export default{
    
}
</script>
<template>
    <div class="container">
        <h2>REAL WORD RESULTS</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">
        <div class="row">
            <div class="card">
                <img src="../assets/img/review_1-compressor.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <p class="name">- Tara Smith</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/review_3-compressor-2.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <p class="name">- Simon Chel</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <img src="../assets/img/review_2-compressor.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <p class="name">- Jen Wirth</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/review_4-compressor-2.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <p class="name">- Jeff Glum</p>
                </div>
            </div>
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
        .row{
            @include dfc;
            gap: 1.5rem;
            .card{
                @include dfc;
                gap: 1em;
                width: 45%;
                background-color: $c-d-grey;
                padding: 1rem;
                img{
                    height: 90px;
                }
                .text-content{
                   display: flex;
                   flex-direction: column;
                   gap: .5em;
                }
            }
        }
    }
</style>