function calculate() {
    //returns first element matching class
    var split = document.querySelector(".split");
    var billInput = document.querySelector(".billAmount");
    var tipInput = document.querySelector(".tipAmount");
    //rewrites this variable by converting element into number
    var split = Number(split.value);
    var billInput = Number(billInput.value);
    var tipInput = Number(tipInput.value);
    //converts percentage and multiplies by bill for tip total
    var tip = billInput * (tipInput/100);
    //adds tip to bill for final total
    var total = billInput + tip;
    //splits the check
    var splitTotal = total / split;
    var splitTotal = Math.round(splitTotal * 100) / 100
    //converts calculations to max of 2 decimal points
    var tip = Math.round(tip * 100) / 100
    var total = Math.round(total * 100) / 100
    //displays tip results in span text
    var h3Tip = document.querySelectorAll("h3")[0];
    var spanTip = h3Tip.querySelector("span"); 
    spanTip.innerText = "Your tip is $" + tip;
    //displays total results in span text
    var h3Total = document.querySelectorAll("h3")[1];
    var spanTotal = h3Total.querySelector("span"); 
    spanTotal.innerText = "For a total of $" + total;

    console.log("Hey", tip.value);

    if(split > 1) {
        //displays tip results in span text
        var h3Tip = document.querySelectorAll("h3")[0];
        var spanTip = h3Tip.querySelector("span"); 
        spanTip.innerText = "The total tip is $" + tip;
        //displays total results in span text
        var h3Total = document.querySelectorAll("h3")[1];
        var spanTotal = h3Total.querySelector("span"); 
        spanTotal.innerText = "You each pay $" + splitTotal;
    }
}

function round() {
    //returns first element matching class
    var split = document.querySelector(".split");
    var billInput = document.querySelector(".billAmount");
    var tipInput = document.querySelector(".tipAmount");
    //rewrites this variable by converting element into number
    var split = Number(split.value);
    var billInput = Number(billInput.value);
    var tipInput = Number(tipInput.value);
    //converts percentage and multiplies by bill for tip total
    var tip = billInput * (tipInput/100);
    //adds tip to bill for final total
    var total = billInput + tip;
    //splits the check
    var splitTotal = total / split;
    var splitTotal = Math.round(splitTotal * 100) / 100
    //converts calculations to max of 2 decimal points
    var total = Math.round(total);
    var tip = Math.round((total - billInput) * 100) / 100;
    //displays tip results in span text
    var h3Tip = document.querySelectorAll("h3")[0];
    var spanTip = h3Tip.querySelector("span"); 
    spanTip.innerText = "Your tip is $" + tip;
    //displays total results in span text
    var h3Total = document.querySelectorAll("h3")[1];
    var spanTotal = h3Total.querySelector("span"); 
    spanTotal.innerText = "For a total of $" + total;

    if(split > 1) {
        //calculate split rounding
        var splitTotal = Math.round(splitTotal);
        var splitRounded = (splitTotal * split) - billInput;
        var splitRounded = Math.round(splitRounded * 100) / 100
        //displays tip results in span text
        var h3Tip = document.querySelectorAll("h3")[0];
        var spanTip = h3Tip.querySelector("span"); 
        spanTip.innerText = "The total tip is $" + splitRounded;
        //displays total results in span text
        var h3Total = document.querySelectorAll("h3")[1];
        var spanTotal = h3Total.querySelector("span"); 
        spanTotal.innerText = "You each pay $" + splitTotal;
    }
}