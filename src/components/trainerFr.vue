<script>
import social from './trainersocial.vue'
export default{
    components:{
        social
    }
}
</script>
<template>
    <div class="container">
        <h2>MEET OUR TRAINERS</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">
        <div class="row">
            <div class="card">
                <img src="../assets/img/trainer1.jpg" alt="">
                <div class="text-c">
                    <h5>ann</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum provident cumque perspiciatis culpa distinctio tempora eius velit, tempore </p>
                    <social/>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/trainer1.jpg" alt="">
                <div class="text-c">
                    <h5>ann</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum provident cumque perspiciatis culpa distinctio tempora eius velit, tempore </p>
                    <social/>
                </div>
            </div>
            <div class="card">
                <img src="../assets/img/trainer1.jpg" alt="">
                <div class="text-c">
                    <h5>ann</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum provident cumque perspiciatis culpa distinctio tempora eius velit, tempore </p>
                    <social/>
                </div>
            </div>
        </div>
        <button class="btn-1"> VIEW ALL TRAINERS</button>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
.container{
        @include dfc;
        gap: 2.5rem ;
        flex-direction: column;
        background-color: $c-grey;
        color: $c-white;
        padding: 4rem;
        .card{
            background-color: $c-d-grey;
            width: calc((100% - 4rem) / 3);
            img{
                width: 100%;
            }
            .text-c{
                @include dfj;
                gap: 1rem;
                flex-direction: column;
                padding: 2rem;
            }
        }
        .row{
            @include dfc;
            gap: 2rem;
        }
    }
</style>