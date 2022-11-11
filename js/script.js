
    let shoulder = document.getElementById('X');
    shoulder.oninput = sizeX;
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');

    plus.addEventListener('click', function () {
        if (X > 74) return;
        let tempShoulder = shoulder.value = +shoulder.value + 1;
        X = tempShoulder;
        document.getElementById('infoX').innerHTML = X;
        console.log(X);
        if (k == 1 || k == -1) {
            calculation();
        }
    });

    minus.addEventListener('click', function () {
        if (X < 1) return;
        let tempShoulder = shoulder.value = +shoulder.value - 1;
        X = tempShoulder;
        document.getElementById('infoX').innerHTML = X;
        console.log(X);
        if (k == 1 || k == -1) {
            calculation();
        }

    });

    let position = 1, d=0, a, X = 1, inn, outt, l, k, PnL, rD, rP, SL;

    function positions() {
        position = document.getElementById('position').selectedIndex;
        console.log('position = ' + position);
    }
    function deposit() {
        d = document.getElementById('deposit').value;
        d = parseFloat(d);
        console.log('d = ' + d);
    }
    function inPoint() {
        inn = document.getElementById('in').value;
        inn = parseFloat(inn);
        console.log('in = ' + inn);
    }
    function outPoint() {
        outt = document.getElementById('out').value;
        outt = parseFloat(outt);
        console.log('out = ' + outt);
        if (k == 1 || k == -1) {
            calculation();
        }
    }

// rP -  кол- во процентов, rD - кол - во долларов
    function risk(valid) {                                    // сумма долларов от депозита, которой рискуем
        console.log('Entered');
        if (valid==0){
            console.log('Entered-->rD');
            rD = document.getElementById('riskDollar').value;
            rD = parseFloat(rD);
            rP = (rD)/(d/100);
            document.getElementById('riskProcent').value = rP;
        }
        if (valid==1){
            console.log('Entered-->rP');
            rP = document.getElementById('riskProcent').value;  // кол-во процентов от депозита, которой рискуем 
            rP = parseFloat(rP);
            rD = (d/100)*rP;
            document.getElementById('riskDollar').value = rD;
        }
        
        SL = inn * (((position*rP)/(100*X))+1);
        document.getElementById('SL').innerHTML = SL;
        console.log('SL ='+SL);
    }
    
    function sizeX() {
        X = parseInt(shoulder.innerHTML = this.value);
        document.getElementById('infoX').innerHTML = this.value;
        console.log(X);
        if (k == 1 || k == -1) {
            calculation();
        }
    }
    function calculation() {
        console.log('k before = ' + k);
        console.log('position = ' + position);
        a = ((d * X) / inn);
        if (position == 0) {
            k = -1;
            PnL = (outt - inn) * a;     //лонг
        }
        if (position == 1) {
            k = 1;
            PnL = (inn - outt) * a;     //шорт
        }
        console.log('k = ' + k);
        l = inn * ((k / X) + 1);
        document.getElementById('coinOut').innerHTML = a;
        document.getElementById('liquidationPrice').innerHTML = l;
        document.getElementById('profit').innerHTML = PnL;

    }

