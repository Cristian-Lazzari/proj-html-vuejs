<script>
import social from './trainersocial.vue'
import { store } from '../store'
export default{
    components:{
        social
    },
    data(){
        return{
            store,
        }
    }
}
</script>
<template>
    <div class="container">
        <h2>MEET OUR TRAINERS</h2>
        <img src="../assets/img/divider-xx-red.png" alt="">

        
        <div class="row">
            <div class="card"
             v-for="card, id in store.arrTrainer"
             :key="id">
                <img :src="card.img" alt="">
                <div class="text-c">
                    <h5>{{ card.name }}</h5>
                    <h5>{{ card.profession }}</h5>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. bitis eveniCorrupti, ipsa repellat deet impedit asperiores </p>
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
        background-color: $c-d-grey;
        flex-direction: column;
        flex-wrap: wrap;
        color: $c-white;
        padding: 4rem;
        position: relative;
        .row{
            @include dfc;
            gap: 2rem;
            flex-wrap: wrap;
            .card{
                background-color: $c-grey;
                width: 170px;
                img{
                    width: 100%;
                }
                .text-c{
                    @include dfj;
                    gap: 1rem;
                    flex-direction: column;
                    padding: 2rem;
                    line-height: 1.2rem;
                    p{
                        color: $c-light-grey;
                        line-height: 1.3rem;
                        font-size: .8em;
                    }
                }
            }
        }
    }
    .container::after{
        content: '';
        width: 25px;
        height: 25px;
        transform: rotateZ(45deg);
        position: absolute;
        background-color: $c-d-grey;
        bottom: -10px;
    }
</style>