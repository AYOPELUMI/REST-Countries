'use client'
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { FC, useContext, useEffect, useState } from "react";
import {useSearchParams, usePathname} from "next/navigation";
import { numberFormat } from "../../components/numberFormat.js"
import {BorderComponent} from "../../components/BorderComponent"
import { CountryContext } from "@/components/Context/CountryContext";
import "../../components/index.css"
import "../../components/REST.scss"
import"@/components/Responsive.scss"
import { ThemeContextWrapper } from "@/components/ThemeContextWrapper.jsx";
import { ThemeContext } from "@/components/ThemeContext.js";
import { BsFillMoonFill } from "react-icons/bs";

type Props  = {
		params: {
			slug: String
		}
}

export default function CountryInfo (Props :FC<Props>){
	let countries = useContext(CountryContext)
    const pathname = usePathname("/")
	const [country, setCountry] = useState([])
	const [darkMode, setDarkMode] = useState(true)
	console.log(country)
	console.log(Props.params.slug)
	console.log({countries})

	useEffect(() => {
		setCountry(countries.filter((value) => {return (value.name.common).replace(/ /g,"") == (Props.params.slug).replace(/ /g,"")}))
		console.log({country})
	}, [countries])
	console.log(country[0])
	return (
		<ThemeContextWrapper>
			<header className="restHeader">
				<h2>Where in the world?</h2>
					<ThemeContext.Consumer>
					{({changeTheme}) =>(
						<i className="themeIcon"
							onClick={() => {
								setDarkMode(!darkMode)
								changeTheme(darkMode ? themes.light : themes.dark)
							}}
							>
							<BsFillMoonFill />
							<p>{darkMode ? "Light Mode" :"Dark Mode"}</p>
						</i>
						)}
					</ThemeContext.Consumer> 
			</header>
			{country[0] != undefined ?
				<div className="countryCtnr">
					<Link href="/" replace className="backButton">
							<AiOutlineArrowLeft />
							Back
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
		</ThemeContextWrapper>
	);
}
