import { View, Text, Image, TextInput, Alert } from "react-native"
const logoImage = require("../src/assets/images/loginLogin.png")
import { router } from "expo-router"
import { useRef } from "react"
import { waterStore } from "../src/hooks/store"
const Page = () => {
	const userEmailRef = useRef("")
	const passwordRef = useRef("")

	const setUserName = waterStore((state) => state.setUserName)
	const setEmail = waterStore((state) => state.setEmail)
	const setPlant = waterStore((state) => state.setPlant)
	const setLecturas = waterStore((state) => state.setLecturas)
	const setWateringInfo = waterStore((state) => state.setWateringInfo)
	const setLastTimeWatered = waterStore((state) => state.setLastTimeWatered)

	const loginUser = async () => {
		const email = userEmailRef.current
		const password = passwordRef.current

		if (!email || !password) {
			Alert.alert("Please fill all the fields")
			return
		}

		try {
			// //*API CALL
			const backendURL =
				"https://aquasproutbackend-production.up.railway.app/login"
			const headers = new Headers()
			headers.append("Content-Type", "application/json")
			headers.append("email", email)
			headers.append("password", password)

			const response = await fetch(backendURL, {
				method: "GET",
				headers: headers,
			})

			if (response.status === 404) {
				Alert.alert("User not found")
				return
			}

			if (response.status === 400) {
				Alert.alert("Invalid password")
				return
			}

			const data = await response.json()
			console.log(data)
			// setPlant(data.plant)
			// setEmail(data.email)
			// setLastTimeWatered(data.lastTimeWatered)
			// setLecturas(data.lecturas)
			// setWateringInfo(data.wateringInfo)
			// setUserName(data.userName)
			router.push("/dashboard")
		} catch (error) {
			console.log(error)
			Alert.alert("Error creating user")
		}
	}
	return (
		<View className="bg-[#04F093] w-screen h-screen flex justify-center">
			<View className="bg-white w-[90%] flex mx-auto h-[90%] rounded-xl">
				<Image
					className="flex mx-auto mt-10 rounded-md"
					source={logoImage}
					style={{ width: 300, height: 260 }}
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
						Email
					</Text>

					<TextInput
						onChangeText={(text) => {
							userEmailRef.current = text
						}}
						className="border-2 mb-5 w-full border-gray-700 bg-gray-100 rounded-md mt-2 px-2 py-1"
						style={styles.fontSecundary}
					/>

					<Text className="text-lg" style={styles.fontSecundary}>
						Password
					</Text>

					<TextInput
						onChangeText={(text) => {
							passwordRef.current = text
						}}
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
					<View className="flex flex-row gap-2 justify-center mt-2">
						<Text className="text-lg" style={styles.fontSecundary}>
							Dont you have an account?
						</Text>
						<View onTouchEnd={() => router.push("/signup")}>
							<Text
								style={styles.fontSecundary}
								className="text-blue-600 text-lg"
							>
								Create one
							</Text>
						</View>
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
