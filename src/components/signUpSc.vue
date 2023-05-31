<script>
export default{

}
</script>
<template>
    <div class="container">
        <img src="../assets/img/home_img-compressor.jpg" alt="">
        <div class="form-section">
            <h4>Sign Up For A Free Training Session!</h4>
            <form>
                <label for="name">Name*</label>
                <input id="name" class="iptf" type="text" >
                <label for="email">Email</label>
                <input id="email" class="iptf" type="text">
                <input class="btn-red" type="button" value="START NOW!">
            </form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    .container{
        @include dfc;
        background-color: $c-d-grey;
        color: $c-white;
        padding: 3rem 0;
        gap: 1.6rem;
        img{
            max-width: 25%;
            min-width: 190px;
            align-self: flex-start;
        }
        .form-section{
            form{
                display: flex;
                flex-direction: column;
                gap: .2rem;
                margin-top: 1rem;
                .iptf{
                    background-color: $c-grey;
                    border: 1px solid $c-light-grey;
                    height: 1.7rem;
                }
                label{
                    margin-top: .7rem;
                    color: $c-light-grey;
                    font-size: smaller;
                }

            }
        }
    }
    .btn-red{
        background-color: $c-red;
        color: $c-white;
        border: 0px solid $c-white;
        padding: 1em 2em ;
        margin-top: 1.3rem;
    }

</style>