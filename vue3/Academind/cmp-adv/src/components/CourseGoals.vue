<template>
    <ul>
        <!-- <li v-for="goal in goals" :key="goal">{{ goal }}</li> -->
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" ano="ano" another-prop="..."></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ["Finish the course", 'Learn Vue']
        }
    }
}
</script>