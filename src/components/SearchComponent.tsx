import {useState} from "react"
import {IoIosArrowDown} from "react-icons/io"

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

export function SearchComponent (props:{
	updateSearchedCountries: (args:any) => void,
	countries: countryProps
}) {
	const {
		updateSearchedCountries,
		countries,
	} = props
	console.log({props})
	const Country_Region = ["None",'Africa','Americas','Asia','Europe','Oceania']
	const ListArray = [];
	const[searchedValue, setSearchedValue] = useState<any>(null)
	const [open, setOpen] =useState<boolean>(false)

	const handleOpen = () => {
		setOpen(!open);
	};

	 const handleMenuItem = (event:any) => {
		let index = event.target.getAttribute("value");
		console.log(index)
		index == "None" ? updateSearchedCountries(countries) :	updateSearchedCountries(countries.filter((value:{region:string}) => { return value.region == index}));
		setOpen(false);
  	};

  	const handleSearch = (event:any) => {
		let searchword = event.target.value;
		console.log({searchword})
		setSearchedValue(null)
		searchword !="" ? updateSearchedCountries(countries.filter((value:{name:{common:string}}) => {return (value.name.common.toUpperCase()).includes(searchword.toUpperCase())})) : updateSearchedCountries(countries);
	};

	for (var i = 0; i < 5; i++) {
		const ListItem_El=(
			<li className="menu-item" onClick={handleMenuItem} key={i} value={Country_Region[i]}>
				{Country_Region[i]}
			</li>
		)
		ListArray.push(ListItem_El);
	}

	return(
		<div className="searchCtnr">
			<input type="search" className="searchInput" placeholder="search by name" onChange={handleSearch} />
				<button onClick={handleOpen} className="dropdown">{(searchedValue  != "None" && searchedValue != null)? searchedValue : "Filter By Region" } <IoIosArrowDown />
				{open ? (
						<ul className="dropdownMenu">
							{ListArray}
						</ul>
					) : null}
				</button>
		</div>
	)
}