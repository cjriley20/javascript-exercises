const leapYears = function(year) {
    divisibleBy4 = year % 4 == 0;
    divisibleBy100 = year % 100 == 0;
    divisibleBy400 = year % 400 == 0;

    return divisibleBy400 || (divisibleBy4 && !divisibleBy100);
};

// Do not edit below this line
module.exports = leapYears;
