class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    Plus() {
        return (this.a + this.b);
    }
    Minus() {
        return (this.a - this.b);
    }
    Multi() {
        return (this.a * this.b);
    }
    Division() {
        return (this.a / this.b);
    }
    Percent() {
        return (this.a / 100) * this.b;
    }
}


    let btn = document.querySelectorAll('.operation');
   
    btn.forEach((item) => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            let form = document.querySelector('.formCalc'),
                aNum = Number(form.querySelector('.first-num').value),
                bNum = Number(form.querySelector('.second-num').value),
                res = document.querySelector('.result');

            if(aNum === 0 || bNum === 0) {
                res.innerHTML = 'Зачем ноль?';
                return false;
            }

            let Calc = new Calculator(aNum, bNum);
            let map = new Map();

            map.set('Plus', Calc.Plus());//******************
            map.set('Minus', Calc.Minus());//******************
            map.set('Multi', Calc.Multi());//****************** Не знаю зачем так замудренно и неоптимизированно сделал, может скучно было :)
            map.set('Division', Calc.Division());//**********
            map.set('Percent', Calc.Percent());//**********

            res.innerHTML = map.get(String(this.dataset.operation));
        });
    });