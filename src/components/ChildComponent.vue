<template>
    <div id="child">
        <h2 class="child-text" :id="myRandomId">
            {{ text }}
        </h2>

        <p 
            v-if="subText"
            class="child-subtext"
        >
            {{ subText }}
        </p>

        <ul class="child-list">
            <li v-for="item in aRandomList" :key="item.id">
                {{ item.text }}
            </li>
        </ul>

        <slot name="extra-content">
            This is some fallback content
        </slot>

        <br />

        <button @click="$emit('myFunctionOnClick', 'A new title')">
            Click me to change the title
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        subText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            myRandomId: 1
        };
    },
    computed: {
        aRandomList() {
            return [
                { id: 1, text: 'Hello there' },
                { id: 2, text: 'Heeey' },
                { id: 3, text: 'Idk' },
            ];
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
