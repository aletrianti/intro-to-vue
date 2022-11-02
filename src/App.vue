<template>
    <div id="app">
        <h1 class="app-title">
            {{ title }}
        </h1>

        <child-component 
            :title="title"
            :text="text" 
            subText="General Kenobi"
            @myFunctionOnClick="changeTitle"
        >
            <span slot="extra-content">
                This will be shown in my child component
            </span>
        </child-component>
    </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';

export default {
    name: 'App',
    components: {
      'child-component': ChildComponent,
    },
    data() {
        return {
            title: 'This is a title'
        };
    },
    computed: {
        text() {
            return 'Hello there';
        }
    },
    methods: {
        changeTitle(value) {
            this.title = value;
        }
    },
};
</script>

<style lang="scss" scoped>
@import './styles/variables';

#app {
    background-color: $white;
}
</style>
