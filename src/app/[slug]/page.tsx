'use client'
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { FC, useContext, useEffect, useState } from "react";
import {useSearchParams, usePathname} from "next/navigation";
import { numberFormat } from "../../components/numberFormat.js"
import {BorderComponent} from "../../components/BorderComponent"
import { CountryContext } from "@/components/Context/CountryContext";
import "../../components/REST.scss"
import "../../components/index.css"

type Props  = {
		params: {
			slug: String
		}
}

export default function CountryInfo (Props :FC<Props>){
	let countries = useContext(CountryContext)
    const pathname = usePathname()
	const [country, setCountry] = useState([])
	console.log(country)
	console.log(Props.params.slug)
	console.log({countries})

	useEffect(() => {
		setCountry(countries.filter((value) => {return (value.name.common).replace(/ /g,"") == Props.params.slug}))
		console.log({country})
	}, [countries])
	console.log(country[0])
	return (
		<>
			{country.length != 0 ?
				<div className="countryCtnr">
					<Link href={pathname}>
						<button className="backButton">
							<AiOutlineArrowLeft />
							Back
						</button>
					</Link>
					<div className="countryInfo">
						<img src={country[0].flags.png} alt={country[0].flags.alt} />
						<div className="infoCtnr">
							<h3>{country[0].name.common}</h3>
							<div className="moreInfo">
								{/* <span>Native Name :	<p>{country[0].name.nativeName}</p></span> */}
								<span>Population : <p>{numberFormat(country[0].population)}</p></span>
								<span>Region : <p>{country[0].region}</p></span>
								<span>Sub Region : <p>{country[0].subregion}</p></span>
								{<span>Capital : <p>{country[0].capital}</p></span> }
								{country[0].tld ? <span>Top Level Domain : <p>{country[0].tld[0]}</p></span> : null }
								<span>Currencies : <p>{Object.values(country[0].currencies)[0].name}</p></span>
								<span>Languages : {(Object.values(country[0].languages)).map((value,index) => { return <p key={index}> {value}</p>})}</span>
							</div>
							<div className="borderCtnr">
								<h2>Border Countries : </h2>
								<BorderComponent 
									country={country[0]} 
								/>
							</div>
						</div>
					</div>
				</div>
			: null
			}
		</>
	);
}
