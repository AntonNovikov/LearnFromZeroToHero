<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add resource</base-button>
    </base-card>
    <keep-alive>

        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: { StoredResources, AddResource },
    data() {
        return {
            selectedTab: "stored-resources",
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The Official vue doc',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Learn to google',
                    description: 'The Official vue doc',
                    link: 'https://google.com'
                },
            ]
        };
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        },
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource,
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResoucrce = {
                id: new Date().toISOString(),
                title,
                description,
                link: url,
            }
            this.storedResources.unshift(newResoucrce)
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId){
            // this.storedResources = this.storedResources.filter(res => resId != res.id )
            // console.log(this.storedResources)
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
        this.storedResources.splice(resIndex, 1)
        }
    }
}
</script>