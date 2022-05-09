import { decrement, increment, multiply } from './calculatorSlice';

function Calculator(){
    return (
        <div id="calculator">
            <div id="screen">
                <p id="screen_number"></p>
            </div>
            <div id="top">
                <button>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button>÷</button>
            </div>
            <div id="second_line">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
            </div>
            <div id="third_line">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>
            <div id="fourth_line">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>
            <div id="fifth_line"> 
                <button>0</button>
                <button>.</button>       
                <button>=</button>
            </div>
        </div>
    );
}

export default Calculator;