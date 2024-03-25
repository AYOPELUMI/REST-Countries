const getData = async url => {
	const response = await fetch(url)
	const data = await response.json()
	return data
}


async function fetchQuote() {
    const data = await getData('https://restcountries.com/v3.1/all');
        console.log(data)
            countries = data.sort(function(a,b){
                let x = a.name.common.toLowerCase();
                let y = b.name.common.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            })
            return countries
    }

    export countries = fetchQuote();