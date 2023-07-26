document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector("#currency-converter").addEventListener("submit", async (event) => {
        event.preventDefault();

        const { target:{from,to,amount}}=event;
        let headers=new Headers();
        headers.append("apikey","XW5gn8l2QdUiiurZW0ICteYLTINqWpma");

        const requestOptions ={
            method: "GET",headers,
        }

        try {
            let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            const data= await response.json();

            // document.querySelector(".result").textContent = `As per the exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${to} is ${result.toFixed(2)} `;
            let {info, date, query: {to: convertedTo}, result }= data;
            document.querySelector(".result").textContent =`${result.toFixed(2)}`
            document.querySelector(".exchange-rate").textContent =`As per the exchange rate: ${info.rate.toFixed(2)} for ${date} `
        } catch (error) {
            console.log(error);
        }
    })
}
)