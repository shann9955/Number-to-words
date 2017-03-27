window.doConvert = function() {
  // turn the input number into the textual equivalent
  // e.g. 104 = one hundred and four
  var numberInput = document.getElementById("numberInput").value;
  var outputText = "";
  var outPut = new Array();

  if (numberInput == '0') {
    document.getElementById('result').innerHTML = 'Zero';
    return;
  }

  if (numberInput > 999) {
    document.getElementById('result').innerHTML = 'Please enter a number less than 1000.';
    return;
  }
  
  var i = numberInput.length;
  i = i - 1;

  while (numberInput.length > 3) {
    var thrNum = new Array(3);
    thrNum[2] = numberInput.charAt(numberInput.length - 1);
    thrNum[1] = numberInput.charAt(numberInput.length - 2);
    thrNum[0] = numberInput.charAt(numberInput.length - 3);

    var varToAdd = thrNum[0] + thrNum[1] + thrNum[2];
    outPut.push(varToAdd);
    i--;
    numberInput = numberInput.substring(0, numberInput.length - 3);
  }
  outPut.push(numberInput);
  outPut.reverse();

  for (j = 0; j < outPut.length; j++) {
    outPut[j] = thrConvert(parseInt(outPut[j], 10));
  }

  for (n = 0; n < outPut.length; n++) {
    outputText += outPut[n];
  }

  var mydiv = document.getElementById("result");
  mydiv.innerHTML = outputText;
}

function thrConvert(num) {
  var ones = new Array('', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen');
  var tens = new Array('', ' Ten ', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety');
  var hundred = ' Hundred';
  var outputText = '';
  var numberInput = num.toString();

	//ones
  if (num < 20) {
    outputText = ones[num];
    return outputText;
  }

  //hundreds
  if (numberInput.length == 3) {
    outputText = ones[parseInt(numberInput.charAt(0))] + hundred;
    outputText += tens[parseInt(numberInput.charAt(1))];
    outputText += ones[parseInt(numberInput.charAt(2))];
    return outputText;
  }
  
	//tens
  outputText += tens[parseInt(numberInput.charAt(0))];
  outputText += ones[parseInt(numberInput.charAt(1))];

  return outputText;
}

