/* eslint-disable @next/next/no-img-element */
import {numberFormat} from "./numberFormat"

type CountryTemplateProps = {
	country: countryProps
	key: number
}
type countryProps = {
	borders:[[prop:any]],
	cca3 ?:string
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
					<span><p>Population: </p>{numberFormat(country.population)}</span>
					<span><p>Region: </p>{country.region}</span>
					<span><p>Capital: </p>{country.capital}</span>
				</div>
			</button> 
		) 
	}