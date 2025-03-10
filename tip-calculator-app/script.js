document.addEventListener("input", () => {
    const bill = document.getElementById("bill").value;
    const tipPercentage = document.querySelector('input[name="tip"]:checked');
    const custom = document.getElementById("custom");
    const numPeople = document.getElementById("num-people");

    calculateTip(bill, tipPercentage, custom, numPeople);
});

function calculateTip(bill, tipPercentage, custom, numPeople) {
    const [ok, percentage, people] = validateValues(
        bill,
        tipPercentage,
        custom,
        numPeople
    );

    if (ok) {
        let tip = (bill * percentage) / 100 / people;
        tip = Math.round(tip * 100) / 100;

        let total = bill / people + tip;
        total = Math.round(total * 100) / 100;

        document.getElementById("tip-amount-value").textContent =
            "$" + tip.toFixed(2);
        document.getElementById("total-value").textContent =
            "$" + total.toFixed(2);
        document.getElementById("resetBtn").disabled = false;
    } else {
        resetTotals();
    }
}

function validateValues(bill, tipPercentage, custom, numPeople) {
    let percentage = "";
    if (tipPercentage !== null) {
        custom.value = "";
        percentage = tipPercentage.value;
    } else {
        percentage = custom.value;
    }

    const errorMsg = document.getElementById("error-msg");
    let people = "";
    if (numPeople.value === "0") {
        numPeople.classList.add("error");
        errorMsg.textContent = "Can't be zero";
    } else {
        numPeople.classList.remove("error");
        errorMsg.textContent = "";
        people = numPeople.value;
    }

    if ((bill !== "") & (percentage !== "") & (people !== "")) {
        return [true, percentage, people];
    } else {
        return [false];
    }
}

/* if user clicks on the custom option the fixed tips % are unchecked
   and any calculation done with them are reset */
function resetRadioBtn() {
    radioBtns = document.querySelector('input[name="tip"]:checked');
    if (radioBtns != null) {
        radioBtns.checked = false;
        resetTotals();
    }
}

function resetTotals() {
    document.getElementById("tip-amount-value").textContent = "$0.00";
    document.getElementById("total-value").textContent = "$0.00";
}

function resetAll() {
    resetTotals();
    resetRadioBtn();
    document.getElementById("bill").value = "";
    document.getElementById("custom").value = "";
    document.getElementById("num-people").value = "";
    document.getElementById("resetBtn").disabled = true;
}
