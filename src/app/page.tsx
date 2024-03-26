'use client'
import Image from "next/image";
import {useEffect, useState,useContext} from "react"
import Link from "next/link"
import "../components/REST.scss"
import "../components/Responsive.scss"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { BsFillMoonFill } from "react-icons/bs";
import {ThemeContextWrapper} from "../components/ThemeContextWrapper"
import {ThemeContext, themes} from "../components/ThemeContext"
import {CountryTemplate} from "../components/CountryTemplate"
import {SearchComponent} from "../components/SearchComponent"
import {CountryContext}  from "../components/Context/CountryContext"



export default  function Home() {
	const [darkMode, setDarkMode] = useState(true)
	const [searchedValue, setSearchedValue] = useState("")
	const CountryArray= [];
	let countries = useContext(CountryContext)
	console.log({countries})
	const [searchedCountries, setSearchedCountries] = useState([]);
	console.log({searchedCountries})
	const [isSelectedCountry, setIsSelectedCountry] = useState(false);

useEffect(() => {
	// let Countries = countries.then(data => {return data})
	console.log({countries})
	setSearchedCountries(countries)
}, [countries])
	const handleSelectCountry = (event) =>{
		event.stopPropagation()
		console.log(event.target)
		const index = event.target.getAttribute('index')
		const clone =[]
		console.log({index})
		const new_El = searchedCountries[index]

		clone.push(new_El)
		setSearchedCountries(clone)
		setIsSelectedCountry(true)
	}

	const handleGoBackEvent = () => {
		setIsSelectedCountry(false);
		console.log({searchedValue})
		console.log(searchedCountries.length,countries.length,countries.length)
		const clone = new Array()
			for (var i = 0; i < countries.length; i++) {
				countries[i].name.common.search(searchedValue);
				if ( 0 == countries[i].name.common.toLocaleUpperCase().search(searchedValue.toLocaleUpperCase())) {
					clone.push(countries[i]);
				}
			}
		setSearchedCountries(clone);
		console.log({searchedValue});
	}
	for (var i = 0; i < searchedCountries.length; i++) {
		let countryname = searchedCountries[i].name.common
		console.log(countryname.toString)
		const Country_El=(
			<Link href={`${searchedCountries[i].name.common}`}>
				<CountryTemplate 
					country={searchedCountries[i]}
					Key={i}
					index={i}
				/>
			</Link>
			)
		CountryArray.push(Country_El)
	}

	function updateSearchedCountries (args) {
		setSearchedCountries(args)
	}
	function updateIsSelectedCountry (args) {
		setIsSelectedCountry(args)
	}
	function updateSearchedValue (args) {
		setSearchedValue(args)
	}



	
	return(
			<ThemeContextWrapper>
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
						{isSelectedCountry == false ? 
						<>
							<SearchComponent
								updateSearchedCountries={updateSearchedCountries}
								countries={countries}
								updateIsSelectedCountry={updateIsSelectedCountry}
								updateSearchedValue={updateSearchedValue}
								mainSearchedValue={searchedValue}
							/>
							<div className="countriesCtnr">
								{searchedCountries.length == "0" ? "Oops, no country found" :CountryArray}
							</div>
						</> : null }
				</div> 	
			</ThemeContextWrapper>
  );
}
