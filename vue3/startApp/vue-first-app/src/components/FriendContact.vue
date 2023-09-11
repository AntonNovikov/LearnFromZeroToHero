<template>
    <li>
        <h2>
            {{ name }} {{ isFavorite ? '(Favorite)' : '' }}
        </h2>
        <button @click="toggleDetails">Show Details</button>
        <button @click="toggleFavorite">{{ isFavorite ? 'Delete from' : 'Add to' }} Favorite</button>
        <ul v-if="detailsAreVisible">
            <li>Phone: {{ phoneNumber }}</li>
            <li>Email: {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>

export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        emailAddress: { type: String, required: true },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function (value) {
            //     return value === '1' || value === '0'
            // }
        }
    },
    emits: ['toggle-favorite'],
    // emits: {
    //     'toggle-favorite': function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('Id is missing!')
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsAreVisible: false,
            // friend: {
            //     id: 'manuel',
            //     name: 'Manuel Lorenz',
            //     phone: '92347123',
            //     email: 'emael@laodc.eho'
            // },
            // friendIsFavorite: this.isFavorite,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            // this.$emit('toggle-favorite')
            this.$emit('toggle-favorite', this.id)

            // this.friendIsFavorite = !this.friendIsFavorite;

            //     if (this.friendIsFavorite === '1') {
            //         this.friendIsFavorite = '0';

            //     } else {
            //         this.friendIsFavorite = '1';
            //     }
        }
    },
}

</script>