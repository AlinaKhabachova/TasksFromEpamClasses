//Эратосфеново решето
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

//Сортировка вставками
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

//Работа с матрицей
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
            if (j === (n - 1)) {
                if (chain.length > 1) {
                    document.write(chain + "<br>");
                }
                chain = [];
            }
        }
    }
}

//Циклический сдвиг
function circularShift() {
    var n = prompt("Enter number:");
    var shift = prompt("Enter shift:");
    var array = [];
    for (var i = 31; i >= 0; i--) {
        array.push(1 & (n >> i));
    }
    document.write(n + "<br>");
    document.write(array + "<br>");
    n = (n >>> 32 - shift) + (n << shift);
    array = [];
    for (var i = 31; i >= 0; i--) {
        array.push(1 & (n >> i));
    }
    document.write(n + "<br>");
    document.write(array + "<br>");
}

//Использование реккурсии
function exponentialFunction() {
    var x = prompt("Введите x:", 0);
    var eps = prompt("Введите точность:", 0);
    var i = 1;
    var z = 1;

    function exp(x, eps, i) {
        z *= x / i;
        if (z > eps) {
            return z + exp(x, eps, i + 1);
        } else {
            return z;
        }
    }

    document.write(exp(x, eps, i))
}

//Корректор
function corrector() {
    var str = prompt("Введите строку:");
    document.write(str + "<br>")
    str = str.trim();
    var strWithoutSpaces = str.replace(/\s{2,}/g, " ");
    document.write(strWithoutSpaces + "<br>");
    var result = strWithoutSpaces.replace(/[A-ZА-Я]\S*/g, function toLow(x) {
        return x.charAt(0) + x.substr(1).toLowerCase();
    });
    document.write(result + "<br>");
    var resultWithDots = result.replace(/[a-zа-я]\s[A-ZА-Я]/g, function addDot(x) {
        return x.charAt(0) + ". " + x.charAt(2)
    });
    document.write(resultWithDots + "<br>");

    var arrayWithSing = result.split(" ");
    for (var i = 0; i < arrayWithSing.length; i++) {
        arrayWithSing[i] = "Ъ" + arrayWithSing[i].toLowerCase();
    }
    document.write(arrayWithSing);

}

//Сведения о претендентах
function informationAboutPerson() {
    var applicant = new Array();


}
