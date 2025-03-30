(function () {
    function getSum() {
        const qtyRed = document.querySelector('.js-reserveQty-red');
        const qtyBlack = document.querySelector('.js-reserveQty-black');
        const sumRed = document.querySelector('.js-reserveSum-red');
        const sumBlack = document.querySelector('.js-reserveSum-black');
        const totalSum = document.querySelector('.js-totalSum');
        
        let priceRed = 1400;
        let priceBlack = 1250;
        let countRed = 0;
        let countBlack = 0;
        
        document.querySelectorAll('.js-reserveCheck').forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                let tableId = checkbox.name;
                const table = document.getElementById(tableId);
                const tableNum = document.getElementById(tableId + "-num");
                if (table) {
                    if (checkbox.checked) {
                        if (checkbox.dataset.type === "red") {
                            table.style.fill = "#BC3324";
                            tableNum.style.fill = "#FFFFFF";
                        }
                        else {
                            table.style.fill = "#1f1e1e"; 
                            tableNum.style.fill = "#FFFFFF";
                        }
                    }
                    else {
                        table.style.fill = "";
                        tableNum.style.fill = "";
                    }
                }
                if (checkbox.checked) {
                    if (checkbox.dataset.type === "red") {
                        countRed++;
                    }
                    else {
                        countBlack++;
                    }
                }
                else {
                    if (checkbox.dataset.type === "red") {
                        countRed--;
                    }
                    else {
                        countBlack--;
                    }
                }
                qtyRed.innerHTML = countRed;
                sumRed.innerHTML = countRed * priceRed;
                qtyBlack.innerHTML = countBlack;
                sumBlack.innerHTML = countBlack * priceBlack;
                totalSum.innerHTML = countRed * priceRed + countBlack * priceBlack;
            })
        })
    }
    getSum();

    function clickableSvg() {
        document.querySelectorAll('.scene__table').forEach((tableElement) => {
            tableElement.addEventListener('click', function () {
                const id = this.getAttribute('id');
                console.log(id);
                if (id) {
                    const tableNumber = id.split('_')[1];
                    console.log(tableNumber);
                    const checkbox = document.querySelector('input[name=table_'+tableNumber+']');
                    if (!checkbox.hasAttribute('disabled')) {
                        checkbox.checked = !checkbox.checked;
                        checkbox.dispatchEvent(new Event('change'));
                    }
                }
            });
        });
    }
    clickableSvg();
})();