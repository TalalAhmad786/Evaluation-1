<template>
    <div class="signup">
        <SignUp/>   
    </div>
 

</template>
<script>
import SignUp from '../components/SignupForm.vue';

export default{
    name: 'SignupView',
    components:{
        SignUp
    }
}
</script>