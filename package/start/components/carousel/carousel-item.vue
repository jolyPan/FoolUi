<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name:'xm-carousel-item',
    data() {
        return {
        };
    },
    props:{
        imgWidth:{
            type:Number,
            default:0,
        },
        height:{
            type:Number,
            default:0
        }
    }
}

</script>