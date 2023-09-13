<template>
    <section>
        <h2>{{ username }}</h2>
        <h3>{{ userage }}</h3>
    </section>
</template>
<script>
export default {
    // props: ['username', 'userage'],
    props: {
        username: {
            type: String,
            required: true
        },
        userage: {
            type: Number,
            required: true
        }
    }
}

</script>

<style>
section {
    margin: 2rem auto;
    min-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
}
</style>