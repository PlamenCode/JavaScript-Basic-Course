window.addEventListener("load", solve);

function solve() {
    let makeInput = document.getElementById("make");
    let modelInput = document.getElementById("model");
    let yearInput = document.getElementById("year");
    let fuelTypeInput = document.getElementById("fuel");
    let originalCostInput = document.getElementById("original-cost");
    let sellingPriceInput = document.getElementById("selling-price");

    let publishBtn = document.getElementById("publish");
    publishBtn.addEventListener("click", onPublish);

    let tBody = document.getElementById("table-body");
    let ulElement = document.getElementById("cars-list");
    let profit = document.getElementById("profit");

    function onPublish(ev) {
        ev.preventDefault();

        if (
            makeInput.value == "" ||
            modelInput.value == "" ||
            yearInput.value == "" ||
            fuelTypeInput.value == "" ||
            originalCostInput.value > sellingPriceInput.value
        ) {
            return;
        }

        let tRow = document.createElement("tr");
        tRow.classList.add("row");

        let tdMake = document.createElement("td");
        tdMake.textContent = makeInput.value;

        let tdModel = document.createElement("td");
        tdModel.textContent = modelInput.value;

        let tdYear = document.createElement("td");
        tdYear.textContent = yearInput.value;

        let tdFuel = document.createElement("td");
        tdFuel.textContent = fuelTypeInput.value;

        let tdOgCost = document.createElement("td");
        tdOgCost.textContent = originalCostInput.value;

        let tdSellPrice = document.createElement("td");
        tdSellPrice.textContent = sellingPriceInput.value;

        let editBtn = document.createElement("button");
        editBtn.setAttribute("class", "action-btn edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", onEdit);

        let sellBtn = document.createElement("button");
        sellBtn.setAttribute("class", "action-btn sell");
        sellBtn.textContent = "Sell";
        sellBtn.addEventListener("click", onSell);

        let buttonsTd = document.createElement("td");

        buttonsTd.appendChild(editBtn);
        buttonsTd.appendChild(sellBtn);

        tRow.appendChild(tdMake);
        tRow.appendChild(tdModel);
        tRow.appendChild(tdYear);
        tRow.appendChild(tdFuel);
        tRow.appendChild(tdOgCost);
        tRow.appendChild(tdSellPrice);
        tRow.appendChild(buttonsTd);

        tBody.appendChild(tRow);

        let saveMake = makeInput.value;
        let saveModel = modelInput.value;
        let saveYear = yearInput.value;
        let saveFuel = fuelTypeInput.value;
        let saveOgCost = originalCostInput.value;
        let savePrice = sellingPriceInput.value;

        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";
        fuelTypeInput.value = "";
        originalCostInput.value = "";
        sellingPriceInput.value = "";

        function onEdit(ev) {
            ev.preventDefault();
            let target = ev.target;
            target.parentElement.parentElement.remove();

            makeInput.value = saveMake;
            modelInput.value = saveModel;
            yearInput.value = saveYear;
            fuelTypeInput.value = saveFuel;
            originalCostInput.value = saveOgCost;
            sellingPriceInput.value = savePrice;
        }

        function onSell(ev) {
            ev.preventDefault();
            let target = ev.target;
            target.parentElement.parentElement.remove();

            let liEl = document.createElement("li");
            liEl.setAttribute("class", "each-list");

            let makeModelSpan = document.createElement("span");
            makeModelSpan.textContent = `${saveMake} ${saveModel}`;

            let yearSpan = document.createElement("span");
            yearSpan.textContent = saveYear;

            let diffSpan = document.createElement("span");
            let diff = savePrice - saveOgCost;
            diffSpan.textContent = diff;

            liEl.appendChild(makeModelSpan);
            liEl.appendChild(yearSpan);
            liEl.appendChild(diffSpan);

            ulElement.appendChild(liEl);

            let currentProfit = Number(profit.textContent) + Number(diff);
            profit.textContent = currentProfit.toFixed(2);
        }
    }
}
