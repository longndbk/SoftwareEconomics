var json;
var interest_rate;
var cost = 0;
function handleFile(e) {
    //Get the files from Upload control
    var files = e.target.files;

    var i, f;
    for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader();
        var name = f.name;
        reader.onload = function (e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, { type: 'binary' });

            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            json = XLSX.utils.sheet_to_json(worksheet, { header: ["thang", "thu_duoc", "chi_phi"], range: 2 });
            interest_rate = worksheet["B1"].v;

            //Insert Data
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + json[i].thang + "</td>");
                tr.append("<td>" + json[i].thu_duoc + "</td>");
                tr.append("<td>" + json[i].chi_phi + "</td>");
                $('#table-basic-finance').append(tr);
            }
            //Calculate present-value
            loadAllCalculate();
        };
        reader.readAsBinaryString(f);
    }
}

function calculate(fomular, id, value) {

    var el = document.getElementById(id);
    el.innerHTML = fomular + " " + value;
    $("#" + id).css("font-size", "150%");
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
}

function loadAllCalculate() {
    //Calculate Present-value
    var x = interest_rate + 1;
    var presentValue = "$ PV = \\frac{FW(n)}{(1+i)^n} = $";
    calculate(presentValue, "present-value", json[0].chi_phi);

    //Calculate Future-Worth
    cost = json[0].chi_phi * Math.pow(x, json.length);
    var futureWorth = "$ FW(n) = PV(1+i)^n = $";
    calculate(futureWorth, "future-worth", cost.toFixed(2));

    //Calculate Net-present-value
    var npv = 0;
    for(var i = 0; i < json.length; i++){
        var ci = json[i].thu_duoc - json[i].chi_phi;
        npv += ci/Math.pow(x, i);
    }
    var netPresentValue = "$ NPV = \\sum_{t=0}^{t = T} \\frac{C_t}{(1+i)^t} = $";
    calculate(netPresentValue, "net-present-value", npv.toFixed(2));

    //Calculate Net-future-worth
    cost = 0;
    for(var i = 0; i < json.length; i++){
        var ci = json[i].thu_duoc - json[i].chi_phi;
        cost += ci*Math.pow(x, json.length - i - 1);
    }
    var netFutureWorth = "$ NFW = \\sum_{t=0}^{T} C_t(1+i)^{n - 1} = $";
    calculate(netFutureWorth, "net-future-worth", cost.toFixed(2));

    //Calculate capotal-recovery-factory
    var y = Math.pow(x, json.length - 1);
    var crf = interest_rate * y / (-1 + y);
    var capitalRecoveryFactory = "$ CRF = \\frac{i(1+i)^n}{(1+i)^n - 1} = $";
    calculate(capitalRecoveryFactory, "capital-recovery-factory", crf.toFixed(2));
    var el = document.getElementById("capital-recovery-factory");
    el.appendChild(document.createTextNode(" $AF = $" + " " + (1 / crf).toFixed(2)));
    $("#af").css("font-size", "150%");
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);

    //Calculate AE
    cost = 0;
    var ae = "$ AE = NPV \\times CRF = $";
    cost = npv*crf;
    calculate(ae, "ae", cost.toFixed(2));

    
    //Calculate minimum acceptable rate of return 
    var averageCost = 0
    var averageProfit = 0;
    cost = 0;
    for(var i = 0; i < json.length; i++){
        averageCost += parseFloat(json[i].chi_phi);
        averageProfit += parseFloat(json[i].thu_duoc);
    }
    cost = averageProfit/averageCost;
    var minimumAcceptableRateOfReturn = "$ ARR = {\\text{Lợi nhuận trung bình}\\over \\text{Chi phí trung bình}} = $"
    calculate(minimumAcceptableRateOfReturn, "minimum-acceptable-rate-of-return", cost.toFixed(2));
    
    //Calculate return on investment
    var npv_chiphi = 0;
    var returnOnInvestment = "$ROI = {{NPV(\\text{Thu nhập - Chi phí})}\\over {NPV(\\text{Chi phí})}} = $";
    for(var i = 0; i < json.length; i++){
        npv_chiphi += json[i].chi_phi/Math.pow(x, i);
    }
    var roi = npv/npv_chiphi;
    calculate(returnOnInvestment, "return-on-investment", roi.toFixed(2));

    //Calculate project balance
    var pb = "$ PB(t) = \\sum_{k=0}^{t} \\frac{C_k}{(1+i)^k} = $";
    calculate(pb, "pb", "10");

    //Calculate payback period
    var paybackPeriod = "";
    calculate(paybackPeriod, "payback-period", "10");

    //Calculate return on capital-employed
    var roce = "$ROCE = {{NPV(\\text{Doanh thu trước thuế})}\\over {NPV(\\text{Chi phí})}} = $";
    calculate(roce, "return-on-capital-employed", "10");
    /**
     * Calculate internal rate of return
     * IRR = ? when the first value of NPV(i) > 0
     */
    var internalRateOfReturn = "$ NPV(i) = \\sum_{t=1}^{T} \\frac{C_t}{(1+i)^t } = 0$";
    calculate(internalRateOfReturn, "internal-rate-of-return", "10");

}
//Change event to dropdownlist
$(document).ready(function () {
    $('#file').change(handleFile);
});