<script>
import social from './footersocial.vue'
export default {
    components:{
        social
    }
}
</script>
<template>
    <div class="top-f">
        <div class="reduct-c">
            <div class="text-cont">
                <h1>Achieve Your Fitness Goal</h1>
                <p>Flexible membership packages to suit all levels of achive fitness</p>
                
            </div>
            <button class="btn-1">JOIN US</button>
        </div>
    </div>
    <div class="main-f">
        <div class="reduct-c">
            <div class="card">
                <h5>COME FIND US</h5>
                <ul>
                    <li>12345 North Main Street</li>
                    <li>New york, NY 555555</li>
                    <li>Phone; 1.234234.123.23</li>
                    <li>Email: email@at.com</li>
                </ul>
            </div>
            <div class="card">
                <h5>REECENT POSTS</h5>
                <ul >
                    <li class="collaps">Train whit fre wheight or your bofy?</li>
                    <li class="collaps">Nutritional advice thet will keep you training</li>
                    
                </ul>
            </div>
            <div class="card">
                <h5>OPENING TIMES</h5>
                <ul>
                    <li>Wednesdat - Monday - fryday</li>
                    <li>09:00 - 20:00</li>
                    <li>Wednesdat - Monday - fryday</li>
                    <li>09:00 - 20:00</li>
                </ul>
            </div>
            <img src="../assets/img/gym_ad-compressor.jpg" alt="">
        </div>
    </div>
    <div class="bottom-f">
        <div class="reduct-c">
            <p>© Copyright 2012 - 2020 | Avada Theme by Theme Fusion | Powered by thelezz</p>
            <social/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .reduct-c{
        max-width: 900px;
        margin: 0 auto;
        color: $c-light-grey;
    }
    .top-f{
        padding: 3.5rem;
        background-image: url('../assets/img/home-parallax.jpg');
        background-size: cover;
        background-position: center;
        .reduct-c{
            color: $c-white;
            @include dfa;
            justify-content: space-between;
        }
    }
    .main-f{
        padding: 4rem;
        background-color: $c-grey;
        .reduct-c{
            @include dfj;
            gap: 2rem;
            flex-wrap: wrap;
            h5{
                font-size: .8em;
                line-height: 1.6rem;
                opacity: .5;
            }
            ul{
                line-height: 1.6rem;
                font-size: .8em;
                width: 150px;

            }
            img{
                width: 150px;
            }
            .collaps{
                position: relative;
                margin-bottom: 10px;
            }
            .collaps::after{
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: $c-light-grey;
            }
            
        }
    }
    .bottom-f{
        background-color: $c-d-grey;
        padding: 2.5rem;
        .reduct-c{
            @include dfa;
            justify-content: space-between;
            font-size: 0.7em;
        }
    }
</style>