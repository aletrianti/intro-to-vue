<template>
    <div id="app">
        <h1 class="app-title">
            {{ title }}
        </h1>

        <child-component :text="text" subText="General Kenobi"></child-component>
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
    methods: {},
};
</script>

<style lang="scss" scoped>
@import './styles/variables';

#app {
    background-color: $white;
}
</style>
