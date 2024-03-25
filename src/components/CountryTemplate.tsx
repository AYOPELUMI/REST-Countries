import {numberFormat} from "./assets/numberFormat"
export function CountryTemplate (props) { 
		const { 
			country,
			onClick,
			Key,
			index
		} = props; 
		return(
			<button className="country" index={index} onClick={onClick} key={Key}>
				<img src={country.flags.png} index={index} alt={country.flags.alt} /> 
				<p className="countryName" index={index} style={{ textAlign :name.length>16 ? "center": undefined}} >{country.name.common}</p> 
				<div >
					<p index={index}><span>Population: </span>{numberFormat(country.population)}</p>
					<p index={index}><span>Region: </span>{country.region}</p>
					<p index={index}><span>Capital: </span>{country.capital}</p>
				</div>
			</button> 
		) 
	}