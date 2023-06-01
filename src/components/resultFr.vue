<script>
export default{
    
}
</script>
<template>
    <div class="container">
        <h2>REAL WORD RESULTS</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">
        <div class="grid">
            <div class="card">
                <img src="../assets/img/review_1-compressor.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <h5 class="name">- Tara Smith</h5>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/review_3-compressor-2.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <h5 class="name">- Simon Chel</h5>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/review_2-compressor.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <h5 class="name">- Jen Wirth</h5>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/review_4-compressor-2.jpg" alt="">
                <div class="text-content">
                    <p>"Lorem ipsum dolor sit, amet ur perferendis id expedita ae culpa aliquam, nesciunt" </p>
                    <h5 class="name">- Jeff Glum</h5>
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
        gap: 2.5rem;
        padding: 2rem;
        max-width: 700px;
        margin: 0 auto;
        padding-top: 7rem;
        .grid{
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            .card{
                @include dfc;
                
                gap: 1em;
                
                background-color: $c-d-grey;
                padding: 1.5rem;
                img{
                    height: 90px;
                }
                .text-content{
                   display: flex;
                   flex-direction: column;
                   gap: .5em;
                   color: $c-light-grey;
                   p{
                    font-family: cursive;
                   }
                }
            }
        }
        @media (max-width:510px) {
            .grid{
            display: grid;
            grid-template-rows: 1fr ;
            grid-template-columns: 1fr ;
            gap: 1.5rem;
            
        }
            
        }
    }
</style>