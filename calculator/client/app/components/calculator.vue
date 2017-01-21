<template>
    <div id="calculator">
        <div class="row calc-removeMarginBottom">
            <div class="col s12 m12 l12 calc-inputBar">
                <h1 id="calc-inputValue" class="calc-inputValue">{{ currentInput }}</h1>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s9 m9 l9 calc-ac calc">
                <h2>AC</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc">
                <h2>&divide;</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>7</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>8</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>9</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc">
                <h2>x</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>4</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>5</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>6</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc">
                <h2>-</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>1</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>2</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>3</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc">
                <h2>+</h2>
            </div>
        </div>
        <div class="row calc-removeMarginBottom">
            <div class="col s6 m6 l6 calc-operand calc">
                <h2>0</h2>
            </div>
            <div class="col s3 m3 l3 calc-operand calc">
                <h2>.</h2>
            </div>
            <div class="col s3 m3 l3 calc-operator calc">
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
                currentInput: 0,
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

            buildCalculation() {
                this.calculationString = this.calculationString + ' ' + this.currentInput;
            },

            calculate(calculation) {
                this.result = eval(calculation)
            }
        }
    }
</script>
