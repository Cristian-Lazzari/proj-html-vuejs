<script>
import{ store } from '../store'
export default{
    data(){
        return{
            store,
        }
    }

}
</script>
<template>
    <div class="container">
        <div class="reduct-c">
            <h2>PERFOMANCE NEWS</h2>
            <img src="../assets/img/divider-xx-red.png" alt="">
            <div class="card-container">
                <div class="card"
                v-for="card, id in store.ArrPerformance"
                :key="id"
                >
                    <img :src="card.img" alt="">
                    <div class="text-content">
                        <h3>{{ card.text }}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, explicabo facere nesciunt non maiores in repudiandae architecto quibusdam, eius culpa fugit magnam ea cupiditate </p>
                    </div>
                </div>
               
            </div>
            <button class="btn-1"> READ ALL ARTICLE </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
.container{
    background-color: $c-grey;
    padding-bottom: 7rem;
    
    .reduct-c{
        @include dfc;
        gap: 2rem;
        padding-top: 5rem;
        flex-direction: column;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
        color: $c-white;
        .card-container{
            height: 740px;
            // gap: 2rem;
            // flex-wrap: wrap;
            display: flex;
            flex-direction: column;
            align-content: center;
            flex-wrap: wrap;  
            gap: 2rem;
            .card{
                
                background-color: $c-d-grey;
                width: 175px;
                img{
                    width: 100%;
                }
                .text-content{
                    @include dfc;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1rem;
                    text-align: left;
                    line-height: 1.7rem;
                    p{
                        color: $c-light-grey;
                        font-size: 0.8em;
                        line-height: 1.3rem;
                        font-size: .7em;
                    }
                }
                    
            }

            }

        }
    }
</style>