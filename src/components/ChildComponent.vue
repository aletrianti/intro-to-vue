<template>
    <div id="child">
        <h2 class="child-text">{{ text }}</h2>

        <p 
            v-if="subText"
            class="child-subtext"
        >
            {{ subText }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        subText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
