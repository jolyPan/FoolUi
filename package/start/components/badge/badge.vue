<template>
    <div class="fool__badge">
        <slot></slot>
        <span v-show="!hidden" ref="badge" class="fool__badge--content clearfix" :class="[
            isDot && 'is-dot', 
            $slots.default && 'is-fixed'
        ]" :style="{
            backgroundColor:bgColor,
            color:color
        }">{{content}}</span>
    </div>
</template>

<script>

export default {
    name: 'f-badge',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        bgColor: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        hidden: {
            type: Boolean,
            default: false
        },
        borderColor: {
            type: String,
            default: ''
        },
        max: {
            type: Number,
            default: null
        },
        isDot: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        content: function () {
            if (typeof this.value === 'number' && typeof this.max === 'number') {
                return this.value > this.max ? `${this.max}+` : this.value;
            }
            return this.value;
        },

    },
    data() {
        return {
        }
    },
    methods: {

    },
}
</script>