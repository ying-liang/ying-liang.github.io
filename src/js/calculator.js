function calcTip() {
    var split = Number(document.querySelector("#split").value);
    var billInput = Number(document.querySelector("#billAmount").value);
    var tipInput = Number(document.querySelector("#tipAmount").value) / 100;  
    var totalTip = Math.round((billInput * tipInput) * 100) / 100;
    var spanTip = document.querySelectorAll("h3")[0].querySelector("span"); 
    if(split > 1) {
        var splitTip = Math.round((totalTip / split) * 100) / 100;
        var totalBill = billInput + (splitTip * split);
        var totalTip = splitTip * split;
        spanTip.innerText = " $" + splitTip.toFixed(2) + " ($" + totalTip.toFixed(2) + " all)";
    } else {
        var totalBill = billInput + totalTip;
        spanTip.innerText = " $" + totalTip.toFixed(2);
    }
    var spanTotal = document.querySelectorAll("h3")[1].querySelector("span"); 
    spanTotal.innerText = " $" + totalBill.toFixed(2);
    return [totalBill, totalTip];
}
function roundTip(array) {
    var split = Number(document.querySelector("#split").value);
    var totalBill = array[0];
    var totalTip = array[1];
    var spanTip = document.querySelectorAll("h3")[0].querySelector("span"); 
    var adjTotalBill = Math.ceil(totalBill);
    if(split > 1) {
        var splitTip = Math.round((totalTip / split) * 100) / 100;
        var increaseTip = adjTotalBill - totalBill;
        var splitTipInc = Math.round((increaseTip / split) * 100) / 100;
        splitTip = splitTip + splitTipInc;
        var billInput = totalBill - totalTip;
        adjTotalBill = splitTip * split + billInput;
        totalTip = splitTip * split;
        spanTip.innerText = " $" + splitTip.toFixed(2) + " ($" + totalTip.toFixed(2) + " all)";
    } else {
        var adjTip = adjTotalBill - totalBill + totalTip;
        spanTip.innerText = " $" + adjTip.toFixed(2);
    }
    var spanTotal = document.querySelectorAll("h3")[1].querySelector("span"); 
    spanTotal.innerText = " $" + adjTotalBill.toFixed(2);
}