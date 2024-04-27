'use client'
import Image from "next/image";
import {useEffect, useState, useContext} from "react"
import Link from "next/link"
import "../components/Responsive.scss"
import "../components/index.css" 
import { BsFillMoonFill } from "react-icons/bs";
import {CountryTemplate} from "../components/CountryTemplate"
import {SearchComponent} from "../components/SearchComponent"
import { CountryContext } from "@/components/Context/CountryContext";
import {ThemeContext, themes} from "@/components/ThemeContext"

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
}[]

export default  function Home() {
	const [darkMode, setDarkMode] = useState<boolean>(true)
	const CountryArray= [];
	const countries:countryProps = useContext(CountryContext)
	console.log({countries})
	const [searchedCountries, setSearchedCountries] = useState<countryProps>([]);
	console.log({searchedCountries})


	useEffect(() => {
		setSearchedCountries(countries)
	}, [countries])



	for (var i = 0; i < searchedCountries.length; i++) {

		const Country_El=(
			<Link key={i} href={`${(searchedCountries[i].name.common).replace(/ /g, "")}`}>
				<CountryTemplate 
					country={searchedCountries[i]}
					
				/>
			</Link>
			)
		CountryArray.push(Country_El)
	}

	function updateSearchedCountries (args:any) {
		setSearchedCountries(args)
	}




	
	return(
		<>
			<head>
        		<title>REST COUNTRIES</title>
				<link rel="icon" href="/favicon.ico" sizes="48x48" />
      		</head>
			<body>
				<div className="restBody">
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
					<SearchComponent
						updateSearchedCountries={updateSearchedCountries}
						countries={countries}
					/>
					<div className="countriesCtnr">
						{searchedCountries.length == 0 ? "Oops, no country found" :CountryArray}
					</div>
				</div>
			</body>
		</>
  );
}
