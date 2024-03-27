import {useState} from "react"
import {IoIosArrowDown} from "react-icons/io"

export function SearchComponent (props) {
	const {
		updateSearchedCountries,
		countries,
		updateIsSelectedCountry,
		updateSearchedValue,
		updateOpen
	} = props
	console.log({props})
	const Country_Region = ["None",'Africa','Americas','Asia','Europe','Oceania']
	const ListArray = [];
	const[searchedValue, setSearchedValue] = useState(null)
	const [open, setOpen] =useState(false)

	const handleOpen = () => {
		setOpen(!open);
	};

	 const handleMenuItem = (event) => {
		let index = event.target.getAttribute("value");
		console.log(index)
		index == "None" ? updateSearchedCountries(countries) :	updateSearchedCountries(countries.filter((value) => { return value.region == index}));
		setOpen(false);
  	};

  	const handleSearch = (event) => {
				let searchword = event.target.value;
				console.log({searchword})
				// updateSearchedValue(searchword)
setSearchedValue(null)
		searchword !="" ? updateSearchedCountries(countries.filter((value) => {return (value.name.common.toUpperCase()).includes(searchword.toUpperCase())})) : updateSearchedCountries(countries);
				updateIsSelectedCountry(false);
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