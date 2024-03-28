/* eslint-disable @next/next/no-img-element */
import {numberFormat} from "./numberFormat"

type CountryTemplateProps = {
	country: countryProps
	key: number
}
type countryProps = {
	borders:[[prop:any]],
	cca3:string
	cioc:string
	name:{
		common:string
	}
	flags:{
		alt:string,
		png:string
	}
	population: string
	region:string
	subregion:string,
	capital:string,
	tld?:any,
	languages:[]
	currencies: {
		[prop:string]:{
			name:string
	}}
}
export function CountryTemplate (props:CountryTemplateProps) { 
	const{
		country,
		key
	} = props
		return(
			<button className="country" key={key} >
				
				<img src={country.flags.png} alt={country.flags.alt} />
				<p className="countryName">{country.name.common}</p> 
				<div >
					<p><span>Population: </span>{numberFormat(country.population)}</p>
					<p><span>Region: </span>{country.region}</p>
					<p><span>Capital: </span>{country.capital}</p>
				</div>
			</button> 
		) 
	}