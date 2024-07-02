import { View, Text, Image, TextInput, Button, Alert } from "react-native"
import { useFonts } from "expo-font"
const logoImage = require("../src/assets/images/loginLogin.png")
import { router } from "expo-router"
import { useState } from "react"

const Page = () => {
	const [fontsLoaded] = useFonts({
		"Black-Ops-One": require("../src/assets/fonts/BlackOpsOne-Regular.ttf"),
		Oswald: require("../src/assets/fonts/Oswald-VariableFont_wght.ttf"),
	})

	if (!fontsLoaded) {
		return <Text>Loading...</Text>
	}

	const [userName, setUserName] = useState()
	const [password, setPassword] = useState()

	const loginUser = () => {
		setUserName(userName)
		setPassword(password)
		router.push("/dashboard")
	}
	return (
		<View className="bg-[#04F093] w-screen h-screen flex justify-center">
			<View className="bg-white w-[90%] flex mx-auto h-[90%] rounded-xl">
				<Image
					className="flex mx-auto mt-10 rounded-md"
					source={logoImage}
					style={{ width: 300, height: 300 }}
				/>
				<Text
					className="text-4xl text-[#04D4F0] text-center mt-10"
					style={[styles.fontMain, styles.strokeEffect]}
				>
					Aqua Sprout
				</Text>
				<Text className="text-center text-lg pt-4" style={styles.fontSecundary}>
					Your Automatic watering system
				</Text>
				<View className="flex mx-10 mt-4">
					<Text className="text-lg" style={styles.fontSecundary}>
						UserName
					</Text>

					<TextInput
						value={userName}
						className="border-2 mb-5 w-full border-gray-700 bg-gray-100 rounded-md mt-2 px-2 py-1"
						style={styles.fontSecundary}
					/>

					<Text className="text-lg" style={styles.fontSecundary}>
						Password
					</Text>

					<TextInput
						value={password}
						className="border-2 mb-5 w-full border-gray-700 bg-gray-100 rounded-md mt-2 px-2 py-1"
						style={styles.fontSecundary}
					/>

					<View
						className="w-full bg-[#98FB98] p-4 rounded-md mt-2"
						onTouchEnd={loginUser}
					>
						<Text
							style={[styles.fontMain, styles.strokeEffect]}
							className="text-white text-center text-lg"
						>
							Login
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
export default Page

const styles = {
	fontMain: {
		fontFamily: "Black-Ops-One",
	},
	fontSecundary: {
		fontFamily: "Oswald",
	},
	strokeEffect: {
		textShadowColor: "#000",
		textShadowOffset: { width: 2, height: 1 },
		textShadowRadius: 1,
	},
}
