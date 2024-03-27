import { useContext } from "react"
import Link from "next/link"
import { CountryContext } from "./Context/CountryContext"

export function BorderComponent(props) {
	const {
		country
	} = props
	const countries = useContext(CountryContext)
	const bdrArray = []
console.log({countries})	



	if (country.borders != undefined) {
		if (country.borders.length >= 1) {

			for (var i = 0; i < country.borders.length; i++) {

				let searchedValue = country.borders[i].toLocaleUpperCase()
				console.log({searchedValue})
				for (var j = 0; j < countries.length; j++) {
		  			let countryName = countries[j].cca3 ? countries[j].cca3 : countries[j].cioc
					if ( 0 == countryName.search(searchedValue)) {
						console.log(String(countries[j].name.common).replace(/ /g,""))
						const bdr_El = <Link key={j} className="borderBtn" href={`${(countries[j].name.common).replace(/ /g,"")}`} index={j}>{countries[j].name.common}</Link>

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
		bdrArray.push(<h2>No border Country</h2>)
	}
	console.log(bdrArray)
	return (
		<div>{bdrArray}</div>
	)
}