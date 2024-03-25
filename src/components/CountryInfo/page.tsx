'use client'
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { FC } from "react";
import {useSearchParams, usePathname} from "next/navigation";
import { numberFormat } from "../numberFormat.js"
import {BorderComponent} from "../BorderComponent"
import Countries from "../FetchData.jsx"

type Props  = {
		id: string;
		country: Object;
}

export const CountryInfo :FC<Props> = (Props) => {
	const [countries, setCountries] = useState(Countries.then((value) => {return value	}));
	const searchParams = useSearchParams();
    let modal
    const pathname = usePathname();
	console.log({Countries})

	useEffect(()=>{
		for (var i = 0; i < countriesountries.length; i++) {
			let modal = searchParams.get({`?${countries[i].name.common}`})
		}
	}, [])
	return (
		<>
			{
				modal && 
				<div className="countryCtnr">
					<Link href={pathname}>
						<button className="backButton">
							<AiOutlineArrowLeft />
							Back
						</button>
					</Link>
					<div className="countryInfo">
						<img src={Props.country.flags.png} alt={country.flags.alt} />
						<div className="infoCtnr">
							<h3>{Props.country.name.common}</h3>
							<div className="moreInfo">
								<span>Native Name :	<p>{countryNativeName}</p></span>
								<span>Population : <p>{numberFormat(country.population)}</p></span>
								<span>Region : <p>{country.region}</p></span>
								<span>Sub Region : <p>{country.subregion}</p></span>
								<span>Capital : <p>{country.capital}</p></span>
								{CountQueuingStrategy.tld ? <span>Top Level Domain : <p>{country.tld[0]}</p></span> : null}
								<span>Currencies : <p>{Object.values(country.currencies)[0].name}</p></span>
								<span>Languages : {(Object.values(country.languages)).map((value,index) => { return <p key={index}> {value}</p>})}</span>
							</div>
							<div className="borderCtnr">
								<h2>Border Countries : </h2>
								<BorderComponent 
									country={country}
									newCountries={newCountries}
									updateSearchedCountries={updateSearchedCountries}
									updateIsSelectedCountry={updateIsSelectedCountry} 
								/>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}
