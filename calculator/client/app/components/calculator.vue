<template>
    <div id="calculator">
        <div class="row calc-removeMarginBottom">
            <div class="col s12 m12 l12 calc-inputBar">
                <h1 id="calc-inputValue" class="calc-inputValue">{{ currentInput }}</h1>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s9 m9 l9 calc-ac calc" v-on:click="clear()">
                <h2>AC</h2>
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

    .calc-ac {
        background-color: #A9A9A9;
        height: 100px;
        cursor: pointer;
        border-style: solid;
        border-width: 0.5px;
        border-color: #696969;
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
                this.currentInput = '';
                this.calculationString = '';
                this.lastResult = '';
                this.result = '';
            },

            buildCalculation(inputString) {
                this.calculationString = this.calculationString + '' + inputString;
                this.currentInput = this.calculationString;
            },

            calculate(calculation) {
                this.result = eval(this.calculationString);
                this.currentInput = this.result;
            }
        }
    }
</script>
