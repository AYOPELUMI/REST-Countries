/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
export function BorderComponent(props) {
	const {
		country,
		newCountries,
		updateSearchedCountries,
		updateIsSelectedCountry
	} = props
	const bdrArray = []
	

	const handleSelectBorderCountry = (event) =>{
		let index = event.target.getAttribute('index')
		const clone =[]
		index = Number(index)
		const new_El = newCountries[index]
		console.log({new_El})
		clone.push(new_El)
		updateSearchedCountries(clone)
		updateIsSelectedCountry(true)
	}


	if (country.borders != undefined) {
		if (country.borders.length >= 1) {

			for (var i = 0; i < country.borders.length; i++) {

				let searchedValue = country.borders[i].toLocaleUpperCase()
				console.log({searchedValue})
				for (var j = 0; j < newCountries.length; j++) {
		  			let countryName = newCountries[j].cca3 ? newCountries[j].cca3 : newCountries[j].cioc
					if ( 0 == countryName.search(searchedValue)) {
						const bdr_El = <button key={j} className="borderBtn" onClick={handleSelectBorderCountry} index={j}>{newCountries[j].name.common}</button>

						bdrArray.push(bdr_El)
						break;
					}
				}
			}
		}
	}
	else
	{
		console.error("no borders")
		bdrArray.push(<h2>"No border Country"</h2>)
	}
	console.log(bdrArray)
	return (
		<div>{bdrArray}</div>
	)
}