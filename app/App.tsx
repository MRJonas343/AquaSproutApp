import { View } from "react-native"
import { useFonts } from "expo-font"
import Page from "./login"
const App = () => {
	const [fontsLoaded] = useFonts({
		"Black-Ops-One": require("../src/assets/fonts/BlackOpsOne-Regular.ttf"),
		Oswald: require("../src/assets/fonts/Oswald-VariableFont_wght.ttf"),
	})

	if (!fontsLoaded) {
		return
	}
	return (
		<View>
			<Page />
		</View>
	)
}
export default App
