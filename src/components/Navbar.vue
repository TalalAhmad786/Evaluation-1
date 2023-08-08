<template>
    <div class="fixed flex w-screen bg-blue-400 h-24 justify-center items-center">
        <div>
            
            <button @click="showData" class="text-neutral-70 text-xl hover:underline text-center p-5">Home</button>
            <button  @click="addData" class="text-neutral-70 text-xl hover:underline text-center">Add Task</button>

        </div>

    </div>
</template>
<script>
import router from '@/router';
export default{

name: 'NavbarView',
methods:
{
    showData(){
        router.push('/home/load')
    },
    addData(){
        router.push('/home/task')
    }
}
}


</script>