const startBtn = document.getElementById('start'),
      valBudget = document.querySelector('.budget-value'),
      valDaybudget = document.querySelector('.daybudget-value'),
      valExpenses = document.querySelector('.expenses-value'),
      valOptionalexpenses = document.querySelector('.optionalexpenses-value'),
      valIncome = document.querySelector('.income-value'),
      valMonthsavings =document.querySelector('.monthsavings-value'),
      valYearsavings = document.querySelector('.yearsavings-value'),
      itemExpenses = document.querySelectorAll('.expenses-item'),
      btnExpenses = document.querySelectorAll('button'),
      valOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
      valChooseIncome = document.querySelector('.choose-income')
      valSavings = document.querySelector('#savings'),
      valChooseSum = document.querySelector('.choose-sum'),
      valPercent = document.querySelector('#percent'),
      valYear = document.querySelector('.year-value'),
      valMonth = document.querySelector('.month-value'),
      valDay = document.querySelector('.day-value'),
      valLevel = document.querySelector('.level-value');

let money, time;

startBtn.addEventListener('click', function() {    
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }

    appData.budget = money;
    appData.timeData = time;

    valBudget.textContent = money.toFixed();
    valYear.value = new Date(Date.parse(time)).getFullYear();
    valMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    valDay.value = new Date(Date.parse(time)).getDate();

    appData.start = true;
    disabledBtn();
});

btnExpenses[0].addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < itemExpenses.length; i++) {
        let a = itemExpenses[i].value,
            b = itemExpenses[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {  
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }        
    }

    valExpenses.textContent = sum;    
});


btnExpenses[1].addEventListener('click', function() {
    for (let i = 0; i < valOptionalExpenses.length; i++) {
        let opt = valOptionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;      
        valOptionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnExpenses[2].addEventListener('click', function() {
    if (appData.budget != undefined) {
        

        let budget = 0;

        for (let i = 0; i < itemExpenses.length - 1; i++) {
            let a = itemExpenses[i].value,
                b = itemExpenses[++i].value;
        
            if (typeof(b) != null && a != "" && b != "" && a.length < 50) {  
                budget += +b;
            } else {
                i--;
            }        
        }

        appData.moneyPerDay = ((appData.budget - budget) / 30).toFixed();
        valDaybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            valLevel.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            valLevel.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            valLevel.textContent = "Это высокий уровень достатка!";
        } else {
            valLevel.textContent = "Ошибочка...!";
        }
    } else {
        valDaybudget.textContent = "Произошла ошибка";
    }
});

valChooseIncome.addEventListener('input', function() {
    let item = valChooseIncome.value;
    appData.income = item.split(', ');
    valIncome.textContent = appData.income;
})

valSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

valChooseSum.addEventListener('input', function() {
    onChooseSum();
});

valPercent.addEventListener('input', function() {
    onChooseSum();
});

function onChooseSum() {
    if(appData.savings == true) {
        let sum = +valChooseSum.value,
            percent = +valPercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        valMonthsavings.textContent = appData.monthIncome.toFixed(1);
        valYearsavings.textContent = appData.yearIncome.toFixed(1);
    }
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    start: false,
    savings: false
};

function disabledBtn() {
    btnExpenses.forEach(function(item) {
        if (!item.classList.contains('start') && appData.start == false) {
            item.disabled = 'disabled';
            item.style.opacity = '0.6';
        } else {
            item.disabled = false;
            item.style.opacity = '1';
        }  
    });
};
disabledBtn();
