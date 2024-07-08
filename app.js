// write code here
function extractCurrencyValue(string, rate) {
   let convert = `THB${(string.slice(1)*rate)}`;
   alert(convert);
}

extractCurrencyValue('$120', 30);