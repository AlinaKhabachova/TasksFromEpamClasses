var errorMessage = "input error";

function fibonacciNumbers() {
    var n = prompt("Enter n: ");
    if (!isNaN(n)) {
        var first = 1,
            second = 1;
        for (var i = 1; i <= n; i++) {
            if (i < 3) {
                document.write("<p>" + first + "</p>");
            } else {
                var third = first + second;
                first = second;
                second = third;
                document.write("<p>" + third + "</p>");
            }
        }
    } else {
        alert(errorMessage);
    }
}

function numberPi() {
    var eps = prompt("Enter epsilon:");
    var pi = 0;
    var k = 1;
    var summand = 3;
    var i = 0;
    var t = 4;
    while (Math.abs(summand) > eps) {
        pi += summand;
        i = 2 * k;
        summand = t / (i * (i + 1) * (i + 2));
        t = -t;
        k++;
    }
    document.write(pi);
    console.log(pi);
}

function abbreviation() {
    var str = prompt("Enter 4 words:");
    var abr = [];
    var newArray = str.split(" ");
    if (newArray.length === 4) {
        for (var i = 0; i < newArray.length; i++) {
            abr += newArray[i].charAt(0);
        }
        document.write(abr.toUpperCase());
    } else {
        alert(errorMessage);
    }
}

function sort() {
    n = prompt("Enter size of array");
    if (!isNaN(n)) {
        var randomArray = [];
        for (i = 0; i < n; i++) {
            randomArray.push(Math.floor((Math.random() * 100) + 1));
        }
        var original = randomArray;
        document.write("<p>" + original + "</p>");

        for (i = 0; i < n; i++) {
            var min = i;
            for (var j = i + 1; j < n; j++) {
                if (randomArray[j] < randomArray[min]) {
                    min = j;
                }
            }
            var a = randomArray[min];
            randomArray[min] = randomArray[i];
            randomArray[i] = a;
        }
        document.write("<p>" + randomArray + "</p>");
    } else {
        alert(errorMessage);
    }
}

function workWithArray() {
    var n = prompt("Enter n");
    var m = prompt("Enter m");
    if (!isNaN(n) && !isNaN(m)) {
        var randomArray = [];
        for (var i = 0; i < n; i++) {
            randomArray[i] = [];
            for (var j = 0; j < m; j++) {
                randomArray[i][j] = Math.floor((Math.random() * 7) - 3);
                document.write(randomArray[i][j] + "   ");
            }
            document.write("<p></p>");
        }
        document.write("<p>New array</p>")
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < m; j++) {
                if (randomArray[i][j] > 0) {
                    var count = 0;
                    for (var k = i - 1; k <= i + 1; k++) {
                        for (var l = j - 1; l <= j + 1; l++) {
                            if ((i == k && j == l) || k < 0 || l < 0 || k >= n || l >= m) {
                                continue;
                            } else {
                                if (randomArray[k][l] < 0) {
                                    count += 1;
                                }
                            }
                            if (count >= 2) {
                                randomArray[i][j] = 4;
                            }
                        }
                    }
                }
                document.write(randomArray[i][j] + "   ");
            }
            document.write("<p></p>");
        }
    } else {
        alert(errorMessage);
    }
}

function task6() {
    var n = prompt("Введите целое число в диапазоне от 0 до 10:", 0);
    if (!isNaN(n) && n % 1 === 0 && n >= 0 && n <= 10) {
        for (var i = 0; i <= n; i++) {
            document.write(i + " " + (1 << 3 * i) + "<br>");
        }
    } else {
        alert("Ошибка ввода!");
    }
}

function leastCommonMultiple() {
    var a = prompt("Enter a:", 0);
    var b = prompt("Enter b:", 0);
    var m = a;
    var n = b;
    while (m !== n) {
        if (m > n) {
            m -= n;
        } else {
            n -= m;
        }
    }
    var nok = (Math.abs(a * b)) / m;
    document.write(nok);
}

function exponentiation() {
    var n = prompt("Enter the number from 0 to 10:", 0);
    if (!isNaN(n) && n % 1 === 0 && n >= 0 && n <= 10) {
        var power = 1;
        var k = 8;
        for (var i = 0; i <= n; i++) {
            document.write(i + " " + power + "<br>");
            power *= k;
        }
    } else {
        alert("input error");
    }
}

function primeNumbers() {
    var n = prompt("Enter the number:", 0);
    n = parseInt(n);
    if (!isNaN(n) && n % 1 === 0) {
        if (n === 2) {
            document.write(n + " is prime number");
        } else if ((n % 2 === 0) && (n !== 2)) {
            document.write(n + "  is not prime number");
        } else {
            for (var i = 3; i < Math.sqrt(n) + 1; i += 2) {
                if (n % i == 0) {
                    document.write(n + " is not prime number");
                    break;
                }
                else {
                    document.write(n + " is prime number");
                    break;
                }
            }
        }
    }
    else {
        alert("input error");
    }
}

function sieveOfEratosthenes() {
    var n = prompt("enter size of array");
    var array = [];
    var k = 2;

    for (var i = 0; i < n; i++) {
        array[i] = i + 1;
    }

    for (var i = 2; (i * i) < n; i++) {
        for (var j = (i * i) - 1; j < n; j += i) {
            array[j] = 0;
        }
    }
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== 0) {
            document.write(array[i] + " ");
        }
    }
}

function sortVst() {
    var n = prompt("Enter size of array");
    var tmp;
    var i;

    if (!isNaN(n)) {
        var randomArray = [];
        for (i = 0; i < n; i++) {
            randomArray.push(Math.floor((Math.random() * 100) + 1));
        }
        var original = randomArray;
        document.write("<p>" + original + "</p>");

        for (var j = 1; j < n; j++) {
            tmp = randomArray[j];
            i = j - 1;
            while (i >= 0 && randomArray[i] > tmp) {
                randomArray[i + 1] = randomArray[i];
                i -= 1;
                randomArray[i + 1] = tmp;
            }
        }
        document.write(randomArray);
    }
}


function workWithMatrix() {
    var array = [];
    var n = 6;
    for (var i = 0; i < n; i++) {
        array[i] = [];
        for (var j = 0; j < n; j++) {
            array[i][j] = Math.floor((Math.random() * 9) + 1);
            document.write(array[i][j] + "   ");
        }
        document.write("<p></p>");
    }

    document.write("result <br>");
    var chain = [];
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (array[i][j] === chain[0]) {
                chain.push(array[i][j]);
            } else {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [array[i][j]];
            }
            if (j === (n - 1)) {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [];
            }
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (array[j][i] === chain[0]) {
                chain.push(array[j][i]);
            } else {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [array[j][i]];
            }
            if (i === (n - 1)) {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [];
            }
        }
    }
}


function circularShift() {
    var n = prompt("Enter number:");
    var shift = prompt("Enter shift:");
    var array = [];
    for (var i = 31; i >= 0; i--) {
        array.push(1 & (n >> i));
    }
    alert(array);
    n = (n << 32 - shift) + (n >> shift);
    array = [];
    for (var i = 31; i >= 0; i--) {
        array.push(1 & (n >> i));
    }
    alert(array);
}

function fibonacciNumbersWithRecursiveFunction() {
    var n = prompt("Enter n: ");

    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    document.write(fibonacci(n));
}

function fibonacciNumberWithArrays() {
    var n = prompt("Enter n: ");
    var arrayOfNumbers = [1, 1];

    function fibonacciA(n) {
        if (n > arrayOfNumbers.length) {
            for (var i = arrayOfNumbers.length; i < n; i++) {
                arrayOfNumbers[i] = fibonacciA(i) + fibonacciA(i - 1);
            }
        }
        return arrayOfNumbers[n - 1];
    }

    document.write(fibonacciA(n));
}

function numberPiWithRecursiveFunction() {
    var eps = prompt("Enter epsilon:");
    var pi = 3;
    var k = 1;
    var i = 0;
    var t = 4;
    var arrayOfSummand = [];

    function piN(k, i, t, arrayOfSummand, eps) {
        i = 2 * k;
        arrayOfSummand[k - 1] = t / (i * (i + 1) * (i + 2));
        t = -t;
        if (eps < Math.abs(arrayOfSummand[k - 1])) {
            return piN(++k, i, t, arrayOfSummand, eps);
        } else {
            return arrayOfSummand;
        }
    }

    piN(k, i, t, arrayOfSummand, eps);

    for (var i = 0; i < arrayOfSummand.length; i++) {
        pi += arrayOfSummand[i];
    }
    document.write(pi);
}

function arithmeticMean() {
    var n = prompt("Enter  n:");
    var randomArray = [];
    var arithMean = 0;
    var count = 0;
    for (var i = 0; i < n; i++) {
        randomArray.push(Math.floor((Math.random() * 100) + 1));
    }
    document.write(randomArray + "<br>");

    for (var i = 1; i < randomArray.length; i += 2) {
        if ((randomArray[i] % 2) === 0) {
            arithMean += randomArray[i];
            count += 1;
        }
    }

    arithMean = arithMean / count;
    document.write(arithMean + "");
}

function negativeNumbers() {
    var n = prompt("Enter  n:");
    var randomArray = [];
    for (var i = 0; i < n; i++) {
        randomArray.push(Math.floor((Math.random() * (200)) - 100));
    }
    document.write(randomArray + "<br>");

    var newArray = [];
    for (var i = 0; i < randomArray.length; i++) {
        if (randomArray[i] < 0) {
            newArray.push(randomArray[i]);
        }
    }
    document.write(newArray);
}

function dayOfWeek() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var nowDay = d.getDay();
    var weekArray = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    document.write("Сегодня: " + day + "." + month + "." + year + ", день недели: " + weekArray[nowDay]);
}

var user = [];
user['u1'] = {'login': 'twin', 'password': 'peaks'};
function loginAndPasswords() {
    document.write("<div>" +
        "<label>login</label><input type='text' id='login' /><br>" +
        "<label>password</label><input type='password' id='password' /><br>" +
        "<input onclick='getInformation()' value='submit' type='button'>" +
        "</div>");
}

function getInformation() {
    var loginInput = document.getElementById('login').value;
    var passwordInput = document.getElementById('password').value;

    user.forEach(function (item) {
        if (item.login === loginInput && item.password === passwordInput) {
            alert("user exists");
        } else {
            alert("user doesn't exist");
        }
    });

};

function convertingEmail() {
    var str = prompt("Enter text:");

    document.write(str + "<br>");
    var pattern = /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/g;
    var result = str.replace(pattern, function changeLink(x) {
        return "<a href=\"mailto:" + x + "\">" + x + "</a>";
    })

    document.write(result);
}

function textOfCode() {
    var str = prompt("Enter text:");

    document.write(str + "<br>");
    var pattern = /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/g;
    var result = str.replace(pattern, function changeLink(x) {
        return "<b>" + x + "</b>";
    })

    document.write(result);

}

function dotComma() {
    var str = prompt("Enter text:");
    var pattern = /[A-ZА-Яa-zа-я0-9]+\S(?=(\.|,))/g;
    var result = str.match(pattern);
    document.write(result);
}

function parsingTheDate() {
    var date = prompt("Enter date:", "20.01.2016");
    document.write(date + "<br>");
    var dateArray = date.split(".");
    console.log(dateArray);

    var monthArray = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август",
        "сентябрь", "октябрь", "ноябрь", "декабрь"];
    document.write(dateArray[0] + " " + monthArray[dateArray[1] - 1] + " " + dateArray[2]);
}

//сортировка по остаткам

function createArrayAndSort() {
    var n = prompt("Enter size of array: ");
    mod = prompt("Enter mod: ")
    var randomArray = [];
    for (var i = 0; i < n; i++) {
        randomArray.push(Math.floor((Math.random() * 100) + 1));
    }
    document.write(randomArray + "<br>");


    randomArray.sort(function (a, b) {

        var modA = a % mod;
        var modB = b % mod;

        if (modA < modB) {
            return 1;
        } else if (modA > modB) {
            return -1;
        } else {
            return 0;
        }
    });

    document.write(randomArray);
}

//максимальный аргумент
function maxArg() {
    var maxValue = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) {
            maxValue = arguments[i];
        }
    }
    return maxValue;
}

//поиск минимального из введеных чисел через замыкание
function findMin(min) {
    var owmMin = function (x) {
        if (min > x) {
            min = x;
            return min;
        }
        return min;
    };
    return owmMin;
}

function callTask6() {
    var n = prompt("Enter a number");
    var m = prompt("Enter a number");
    m = parseInt(m);
    var fm = findMin(m);
    n = parseInt(n);
    while (n !== 0) {
        console.log(fm(n));
        n = prompt("Enter a number");
        n = parseInt(n);
    }

    fm = findMin();
}

//поиск минимального из введеных чисел через свойства
function anotherFindMin(n) {
    anotherFindMin.min = m;
    if (anotherFindMin.min > n) {
        anotherFindMin.min = n;
    }
    return anotherFindMin.min;
}

function callTask61() {
    var n = prompt("Enter a number");
    m = prompt("Enter a number");
    m = parseInt(m);
    n = parseInt(n);
    while (n !== 0) {
        console.log(anotherFindMin(n));
        n = prompt("Enter a number");
        n = parseInt(n);
    }
    anotherFindMin.min = 0;
}

//функция
function runFunction() {
    var variable = prompt("Enter variables");
    var bodyOfFunction = prompt("Enter body of function");
    var ownFunction = new Function(variable, bodyOfFunction);


}
