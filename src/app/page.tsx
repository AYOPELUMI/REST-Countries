import Image from "next/image";
import {useEffect, useState} from "react"
import "../components/REST.scss"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { BsFillMoonFill } from "react-icons/bs";
import {ThemeContextWrapper} from "../components/ThemeContextWrapper"
import {ThemeContext, themes} from "../components/ThemeContext"
import {CountryTemplate} from "../components/CountryTemplate"
import {SearchComponent} from "../components/SearchComponent"


export default function Home() {
	const [darkMode, setDarkMode] = useState(true)
	const [searchedValue, setSearchedValue] = useState("")
	const CountryArray= [];
	const [newCountries, setNewCountries] = useState(process.env.countryList)
	let countries =[];

	console.log({newCountries})
	const [searchedCountries, setSearchedCountries] = useState([]);
	console.log({searchedCountries})
	const [isSelectedCountry, setIsSelectedCountry] = useState(false);


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
		console.log(searchedCountries.length,countries.length,newCountries.length)
		const clone = new Array()
			for (var i = 0; i < newCountries.length; i++) {
				newCountries[i].name.common.search(searchedValue);
				if ( 0 == newCountries[i].name.common.toLocaleUpperCase().search(searchedValue.toLocaleUpperCase())) {
					clone.push(newCountries[i]);
				}
			}
		setSearchedCountries(clone);
		console.log({searchedValue});
	}
	for (var i = 0; i < searchedCountries.length; i++) {

		const Country_El=(
			<CountryTemplate 
				country={searchedCountries[i]}
				onClick={handleSelectCountry}
				Key={i}
				index={i}
			/>
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




	useEffect(() => {
		const handleClick = (e) => {
		  	console.log('window is clicked')
		  	// bodyclick(e)
		}
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])
	
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
