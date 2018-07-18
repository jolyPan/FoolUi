<template>
    <div class="xm__badge" :style="{
        marginRight: $refs.badge&& ($refs.badge.offsetWidth + 'px'),
    }">
        <slot></slot>
        <span ref="badge" class="xm__badge--content" :class="[
            isDot && 'is-dot', 
            $slots.default && 'is-fixed'
        ]">{{content}}</span>
    </div>
</template>

<script>

export default {
    name: 'xm-badge',
    props: {
        value:{
            type: [String,Number],
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
        borderColor: {
            type: String,
            default: ''
        },
        max: {
            type: Number,
            default: null
        },
        isDot:{
            type: Boolean,
            default: false
        }
    },
    computed: {
        content: function() {
            if(typeof this.value === 'number' && typeof this.max === 'number') {
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