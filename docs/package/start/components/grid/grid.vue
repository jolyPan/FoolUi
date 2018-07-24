<template>
    <a :href="computeHref" @click="gridAciton" class="fool__grid">
        <div class="fool__grid--icon">
            <slot name='icon'></slot>
        </div>
        <div class="fool__grid--text">
            <slot name='text'></slot>
        </div>
    </a>
</template>
<script>
export default {
    name: "f-grid",
    props: {
        href: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
        };
    },
    computed: {
        computeHref() {
            return this.href && this.href !== '' ? this.href : 'javascript:;'
        }
    },
    methods: {
        gridAciton() {
            this.$emit('click')
        }
    }
}

</script>