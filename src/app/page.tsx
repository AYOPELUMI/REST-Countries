'use client'
import Image from "next/image";
import {useEffect, useState, useContext} from "react"
import Link from "next/link"
import "../components/REST.scss"
import "../components/index.css" 
import {AiOutlineArrowLeft} from "react-icons/ai"
import { BsFillMoonFill } from "react-icons/bs";
import {ThemeContextWrapper} from "../components/ThemeContextWrapper"
import {ThemeContext, themes} from "../components/ThemeContext"
import {CountryTemplate} from "../components/CountryTemplate"
import {SearchComponent} from "../components/SearchComponent"
import { CountryContext } from "@/components/Context/CountryContext";


export default  function Home() {
	const [darkMode, setDarkMode] = useState(true)
	const [searchedValue, setSearchedValue] = useState("")
	const CountryArray= [];
	const newCountries = useContext(CountryContext)


	console.log({newCountries})
	const [searchedCountries, setSearchedCountries] = useState([]);
	console.log({searchedCountries})
	const [isSelectedCountry, setIsSelectedCountry] = useState(false);

	useEffect(() => {
		setSearchedCountries(newCountries)
	}, [newCountries])



	for (var i = 0; i < searchedCountries.length; i++) {

		const Country_El=(
			<Link key={i} href={`${(searchedCountries[i].name.common).replace(/ /g, "")}`}>
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
								newCountries={newCountries}
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
