<template>
    <div :class="classes" style="background-color: darkcyan;">
        <input type="hidden" :name="name" :value="selectedValue"/>
        <div class="enkel-select-wrapper">
            ss
        </div>
    </div>
</template>
<style scoped>
    .enkel-select-wrapper {
        margin: 8px;
        min-width: 120px;
        background-color: red;
    }
</style>
<script>
    import { oneOf } from '../../utils/assist';
    const prefixCls = 'enkel-select';
    export default {
        name: 'iSelect',
        props: {
            data: {
                type: Array,
                default () {
                    return []
                }
            },
            value: {
                type: [String, Number, Array],
                default: ''
            },
            // 使用时，也得设置 value 才行
            label: {
                type: [String, Number, Array],
                default: ''
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterMethod: {
                type: Function
            },
            remoteMethod: {
                type: Function
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$enkel || this.$enkel.size === '' ? 'default' : this.$enkel.size;
                }
            },
            labelInValue: {
                type: Boolean,
                default: false
            },
            notFoundText: {
                type: String
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end']);
                },
                default: 'bottom-start'
            },
            transfer: {
                type: Boolean,
                default () {
                    return !this.$enkel || this.$enkel.transfer === '' ? false : this.$enkel.transfer;
                }
            },
            // Use for AutoComplete
            autoComplete: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            elementId: {
                type: String
            }
        },
        mounted(){
        },
        data () {
            return {
                prefixCls: prefixCls,
                selectedValue: '',
                values: [],
                dropDownWidth: 0,
                visible: false,
                focusIndex: -1,
                isFocused: false,
                query: '',
                initialLabel: this.label,
                hasMouseHoverHead: false,
                slotOptions: this.$slots.default,
                caretPosition: -1,
                lastRemoteQuery: '',
                unchangedQuery: true,
                hasExpectedValue: false,
                preventRemoteCall: false,
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-multiple`]: this.multiple,
                        [`${prefixCls}-single`]: !this.multiple,
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            dropdownCls () {
                return {
                    [prefixCls + '-dropdown-transfer']: this.transfer,
                    [prefixCls + '-multiple']: this.multiple && this.transfer,
                    ['ivu-auto-complete']: this.autoComplete,
                };
            },
            selectionCls () {
                return {
                    [`${prefixCls}-selection`]: !this.autoComplete,
                    [`${prefixCls}-selection-focused`]: this.isFocused
                };
            },
            queryStringMatchesSelectedOption(){
                const selectedOptions = this.values[0];
                if (!selectedOptions) return false;
                const [query, label] = [this.query, selectedOptions.label].map(str => (str || '').trim());
                return !this.multiple && this.unchangedQuery && query === label;
            },
            localeNotFoundText () {
                if (typeof this.notFoundText === 'undefined') {
                    return this.t('i.select.noMatch');
                } else {
                    return this.notFoundText;
                }
            },
            localeLoadingText () {
                if (typeof this.loadingText === 'undefined') {
                    return this.t('i.select.loading');
                } else {
                    return this.loadingText;
                }
            },
            transitionName () {
                return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
            },
            dropVisible () {
                let status = true;
                const noOptions = !this.selectOptions || this.selectOptions.length === 0;
                if (!this.loading && this.remote && this.query === '' && noOptions) status = false;

                if (this.autoComplete && noOptions) status = false;

                return this.visible && status;
            },
            showNotFoundLabel () {
                const {loading, remote, selectOptions} = this;
                return selectOptions && selectOptions.length === 0 && (!remote || (remote && !loading));
            },
            publicValue(){
                if (this.labelInValue){
                    return this.multiple ? this.values : this.values[0];
                } else {
                    return this.multiple ? this.values.map(option => option.value) : (this.values[0] || {}).value;
                }
            },
            canBeCleared(){
                const uiStateMatch = this.hasMouseHoverHead || this.active;
                const qualifiesForClear = !this.multiple && !this.disabled && this.clearable;
                return uiStateMatch && qualifiesForClear && this.reset; // we return a function
            },
            selectOptions() {
                const selectOptions = [];
                const slotOptions = (this.slotOptions || []);
                let optionCounter = -1;
                const currentIndex = this.focusIndex;
                const selectedValues = this.values.filter(Boolean).map(({value}) => value);
                if (this.autoComplete) {
                    const copyChildren = (node, fn) => {
                        return {
                            ...node,
                            children: (node.children || []).map(fn).map(child => copyChildren(child, fn))
                        };
                    };
                    const autoCompleteOptions = extractOptions(slotOptions);
                    const selectedSlotOption = autoCompleteOptions[currentIndex];

                    return slotOptions.map(node => {
                        if (node === selectedSlotOption || getNestedProperty(node, 'componentOptions.propsData.value') === this.value) return applyProp(node, 'isFocused', true);
                        return copyChildren(node, (child) => {
                            if (child !== selectedSlotOption) return child;
                            return applyProp(child, 'isFocused', true);
                        });
                    });
                }
                let hasDefaultSelected = slotOptions.some(option => this.query === option.key);
                for (let option of slotOptions) {

                    const cOptions = option.componentOptions;
                    if (!cOptions) continue;
                    if (cOptions.tag.match(optionGroupRegexp)){
                        let children = cOptions.children;

                        // remove filtered children
                        if (this.filterable){
                            children = children.filter(
                                ({componentOptions}) => this.validateOption(componentOptions)
                            );
                        }

                        cOptions.children = children.map(opt => {
                            optionCounter = optionCounter + 1;
                            return this.processOption(opt, selectedValues, optionCounter === currentIndex);
                        });

                        // keep the group if it still has children
                        if (cOptions.children.length > 0) selectOptions.push({...option});
                    } else {
                        // ignore option if not passing filter
                        if (!hasDefaultSelected) {
                            const optionPassesFilter = this.filterable ? this.validateOption(cOptions) : option;
                            if (!optionPassesFilter) continue;
                        }

                        optionCounter = optionCounter + 1;
                        selectOptions.push(this.processOption(option, selectedValues, optionCounter === currentIndex));
                    }
                }

                return selectOptions;
            },
            flatOptions(){
                return extractOptions(this.selectOptions);
            },
            selectTabindex(){
                return this.disabled || this.filterable ? -1 : 0;
            },
            remote(){
                return typeof this.remoteMethod === 'function';
            }
        },
        methods: {}
    };
</script>
