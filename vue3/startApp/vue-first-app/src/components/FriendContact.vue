<template>
    <li>
        <h2>
            {{ friend.name }}
        </h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: {{ friend.phone }}</li>
            <li>Email: {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>

export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '92347123',
                email: 'emael@laodc.eho'
            },
        }
    },
    methods: {
        toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    },
}

</script>