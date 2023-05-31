<script>
export default {
    props:{
        arr: Array,
    }
}
</script>
<template>
    <div class="container">
        <div class="top-header">
            <img src="../assets/img/gym_logo_2x.png" alt="gymlogo">
            <ul>
                <li
                v-for="item, id in arr"
                :key="id"
                :class="{actived : item.active}"
                class="f-1_1-3">
                    {{ item.title }}
                </li>
            </ul>
        </div>
        <div class="bottom-header f-1-5">
            <h1>NO PAIN NO GAIN</h1>
            <span class="f-1_1-6">Motivation is what gets tyou started. Habit is what keeps you gooing.</span>
            <button class="btn-1">JOIN US TODAY</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .container{
        color: $c-white;
        background-image: url(../assets/img/home-banner.jpg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top;
        background-color: $c-header;
        height: 400px;
        padding: 1.5rem;
        
        .top-header{
            
            display: flex;
            justify-content: space-between;
            img{
                width: 16%;
                min-width: 90px;
            }
            ul{
                @include dfc;
                gap: 1rem;
            }
        }
        .bottom-header{
            @include dfc;
            flex-direction: column;
            height: 60%;
            gap: .8em;
            span{
                font-weight: lighter;
            }
            button{
                margin-top: 5px;
            }

        }
        
    }
.actived{
    color: $c-red
}

</style>