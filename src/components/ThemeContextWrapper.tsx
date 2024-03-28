import {useState, useEffect} from "react"
import {ThemeContext, themes} from "./ThemeContext.jsx"

export function ThemeContextWrapper (props:any) {
	const [theme, setTheme] = useState(themes.dark)

	function changeTheme (theme:any) {
		setTheme(theme)
	}

	useEffect(() =>{
		switch (theme) {
			case themes.light:
				document.documentElement.setAttribute('data-theme', 'light')
				break;
			case themes.dark:
			default:
				document.documentElement.setAttribute('data-theme', 'dark')
				break;
		}
	},[theme])

	return(
		<ThemeContext.Provider value={{theme:theme , changeTheme:changeTheme}}>
			{props.children}
		</ThemeContext.Provider>
		)
}