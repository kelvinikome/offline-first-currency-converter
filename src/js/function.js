const baseUrl = "https://free.currencyconverterapi.com/api/v5/"

fetch(baseUrl+'currencies')
.then(response => {
    return response.json();
})
.then(data => {
    for (let currency of Object.keys(data.results)){
        document.getElementById("currentCurrencyList").innerHTML += 
            "<option value=\""+data.results[currency].id+"\">"+
            data.results[currency].currencyName+" ("+
            data.results[currency].currencySymbol+") "
            "</option>";

        document.getElementById("destinationCurrencyList").innerHTML += 
            "<option value=\""+data.results[currency].id+"\">"+
            data.results[currency].currencyName+" ("+
            data.results[currency].currencySymbol+") "
            "</option>";
    }
});

function convert(){
    let currentCurrency = document.getElementById("currentCurrencyList").value;
    let destinationCurrency = document.getElementById("destinationCurrencyList").value;
    let value = document.getElementById("value").value;

    let query = currentCurrency+"_"+destinationCurrency

    fetch(baseUrl+'convert?q='+query+'&compact=y&')
    .then(response => {
        return response.json();
    }).then(response => {
        document.getElementById("displayValue").innerHTML = value * response[query].val
    })
}