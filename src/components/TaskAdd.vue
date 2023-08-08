<template>
    <div >

        <form class="flex flex-col justify-center items-center " @submit.prevent="submitTask">
            <label for="title">Title:</label>
            <input class="p-2 rounded-full bg-gray-200" type="text" v-model="title" required >
            <label for="description">Description:</label>
            <textarea class="p-2 rounded-full bg-gray-200" v-model="description" required ></textarea>
            <button class="p-5 my-10 rounded-full bg-green-600" type="submit">Submit</button>

        </form>
        <div v-for="i in data" :key="i.id">
            <p>{{ i }}</p>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

//import { mapActions, mapGetters} from 'vuex';

export default {

    name: 'TaskAdd',
    data() {
        return {
            title: '',
            description: ''
        }
    },
    computed: {
        ...mapGetters({ data: 'getTasks' })
    },
    methods: {

        ...mapActions(['addTask']),
        submitTask() {
            const newTask = {
                title: this.title,
                description: this.description
            };
            this.addTask(newTask);


            this.title = '';
            this.description = '';
        }
    }
}
</script>