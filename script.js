const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const valueInput = document.getElementById("value");
const resultInput = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

const conversions = {
  m: {
    km: value => value / 1000,
    mi: value => value * 0.000621371,
    cm: value => value * 100,
  },
  km: {
    m: value => value * 1000,
    mi: value => value * 0.621371,
    cm: value => value * 100000,
  },
  mi: {
    m: value => value / 0.000621371,
    km: value => value / 0.621371,
    cm: value => value / 0.0000062137,
  },
  kg: {
    g: value => value * 1000,
  },
  g: {
    kg: value => value / 1000,
  },
};

function convert() {
  const fromUnit = fromSelect.value;
  const toUnit = toSelect.value;
  const value = Number(valueInput.value);
  const conversionFunction = conversions[fromUnit][toUnit];
  const result = conversionFunction(value);
  resultInput.value = result.toFixed(2);
}

convertBtn.addEventListener("click", convert);