<template>
    <div id="calculator">
        <div class="row calc-removeMarginBottom">
            <div class="col s12 m12 l12 calc-inputBar">
                <h1 v-if="calcEmpty" class="calc-inputValue">0</h1>
                <h1 v-else id="calc-inputValue" class="calc-inputValue">{{ currentInput }}</h1>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="clear()">
                <h2>AC</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('-')">
                <h2>NEG</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="percentToDecimal()">
                <h2>%</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc" v-on:click="buildCalculation('/')">
                <h2>/</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('7')">
                <h2>7</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('8')">
                <h2>8</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('9')">
                <h2>9</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc" v-on:click="buildCalculation('*')">
                <h2>*</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('4')">
                <h2>4</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('5')">
                <h2>5</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('6')">
                <h2>6</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc" v-on:click="buildCalculation('-')">
                <h2>-</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('1')">
                <h2>1</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('2')">
                <h2>2</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('3')">
                <h2>3</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc" v-on:click="buildCalculation('+')">
                <h2>+</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s6 m6 l6 calc-operand calc" v-on:click="buildCalculation('0')">
                <h2>0</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc" v-on:click="buildCalculation('.')">
                <h2>.</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc" v-on:click="calculate()">
                <h2>=</h2>
            </div>
        </div>
    </div>
</template>
<style>
    .calc-inputBar {
        background-color: #696969;
        color: #ffffff;
        height: 125px;
    }

    .calc-inputValue {
        float: right;
    }

    .calc-operand {
        background-color: #A9A9A9;
        height: 100px;
        text-align: center;
        cursor: pointer;
        border-style: solid;
        border-width: 0.5px;
        border-color: #696969;
    }

    .calc-operator {
        background-color: #FF8C00;
        height: 100px;
        text-align: center;
        cursor: pointer;
        border-style: solid;
        border-width: 0.5px;
        border-color: #696969;
    }

    .calc:hover {
        background-color: #000080;
        color: #ffffff;
    }

    .calc-removeMarginBottom {
        margin-bottom: 0px;
    }

</style>
<script>
    export default{
        data(){
            return {
                calcEmpty: true,
                currentInput: '',
                calculationString: '',
                lastResult: '',
                result: ''
            }
        },

        mounted() {
            console.log('Calculator Component Mounted')
        },

        methods: {
            clear() {
                this.calcEmpty = true;
                this.currentInput = '';
                this.calculationString = '';
                this.lastResult = '';
                this.result = '';
            },

            percentToDecimal() {
                // doesn't handle the edge case in which there are two numbers of the same value
                // and i need to replace one with its decimal version but the other remains the same...
                // do i need to add some sort of marker annotating the number to be replaced???
                // outside of this edge case it works... :/
                var oldInput = this.currentInput;
                this.currentInput = eval(this.currentInput + '/100');
                this.calculationString = this.calculationString.replace(oldInput, this.currentInput);
                console.log(this.calculationString)
            },

            buildCalculation(inputString) {
                this.calcEmpty = false;
                this.calculationString = this.calculationString + '' + inputString;
                this.currentInput = this.calculationString;
            },

            calculate(calculation) {
                this.calcEmpty = false;
                this.result = eval(this.calculationString);
                this.calculationString = this.result;
                this.currentInput = this.result;
            }
        }
    }
</script>
