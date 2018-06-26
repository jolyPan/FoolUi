<template>
    <div class="xm__form--input">
        <input :min="min" :max="max" :disabled="disabled" class="xm__form--control" :type="type" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    name:"xm-input",
    model:{
        prop:"text",
        event:"change"
    },
    props:{
        type:{
            type:String,
            default:"text"
        },
        text:{
            type:String,
            default:""
        },
        placeholder:{
            type:String,
            default:null
        },
        disabled:{
            type:Boolean,
            default:false
        },
        min:{
            type:Number,
            default:null
        },
        max:{
            type:Number,
            default:null
        },
    },
    data() {
        return {};
    }
};
</script>