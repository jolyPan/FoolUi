<template>
    <div class="xm__form--input xm__form--control" :disabled="disabled">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'text'" type="text" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem',height:'2rem'}" ref="input" v-if="type == 'search'" type="search" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'password'" type="password" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'number'" type="number" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'email'" type="email" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'tel'" type="tel" pattern="[0-9]*" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" maxlength="11" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'datetime-local'" type="datetime-local" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'date'" type="date" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <input class="xm__form--control" :style="{paddingRight:$slots.icon ? '.5rem' : '1.5rem'}" ref="input" v-if="type == 'time'" type="time" v-model="currentValue" :name="name" @focus="onFocus" @blur="onBlur" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled" :class="[{'is-right': right}]">
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <span v-if="currentValue && !$slots.icon && !disabled && type !== 'datetime-local' && type !== 'date' && type !== 'time'" @click="clear" class="xm__icon--close animate"></span>
        </transition>
        <span class="xm__icon--after">
            <transition name="custom-classes-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <slot name="icon"></slot>
            </transition>
        </span>
    </div>
</template>
<script>
export default {
    name: 'xm-input',
    model: {
        props: "value",
        event: 'input'
    },
    props: {
        name: String,
        placeholder: String,
        value: [String, Number],
        readonly: Boolean,
        disabled: Boolean,
        autocomplete: {
            type: String,
            default: 'off'
        },
        type: {
            type: String,
            default: 'text'
        },
        max: {
            validator(val) {
                return /^\d*$/.test(val)
            }
        },
        right: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentValue: null
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue(val) {
            this.$emit('input', val)
        }
    },
    methods: {
        clear() {
            this.$emit('clear', )
            this.currentValue = null
            this.$emit('input', this.currentValue)
        },
        onBlur(event) {
            this.$emit('blur', event.target.value)
        },
        onFocus() {
            this.$emit('focus')
        }
    }
}
</script>

<style scoped lang="scss">
</style>
