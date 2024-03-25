

async function getData () {
	const response = await fetch('https://restcountries.com/v3.1/all')
	const data = await response.json()

    let countries = data.sort(function(a,b){
        let x = a.name.common.toLowerCase();
        let y = b.name.common.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    })
	return countries
}


let Countries = getData()
console.log(Countries)
export {Countries}