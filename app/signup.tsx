import { View, Text, TextInput, Image, Alert } from "react-native"
import { useRef } from "react"
import { router } from "expo-router"
const plant = require("../src/assets/images/planta.png")

const Page = () => {
	const plantRef = useRef("")
	const userNameRef = useRef("")
	const emailRef = useRef("")
	const passwordRef = useRef("")

	const createUser = async () => {
		const plant = plantRef.current
		const userName = userNameRef.current
		const email = emailRef.current
		const password = passwordRef.current

		if (!plant || !userName || !email || !password) {
			Alert.alert("Please fill all the fields")
			return
		}

		try {
			//*API CALL
			const backendURL = "http://localhost:3000/signup"
			const headers = new Headers()
			headers.append("Content-Type", "application/json")
			headers.append("Accept", "application/json")
			const response = await fetch(backendURL, {
				method: "POST",
				headers: headers,
				body: JSON.stringify({ plant, userName, email, password }),
			})

			if (response.status !== 200) {
				Alert.alert("Error creating user")
				return
			}

			Alert.alert("User created successfully")

			setTimeout(() => {
				router.push("/login")
			}, 2000)
		} catch (error) {
			console.log(error)
			Alert.alert("Error creating user")
		}
	}

	return (
		<View className="bg-[#04F093] w-screen h-screen flex justify-center">
			<View className="bg-white w-[90%] flex mx-auto h-[90%] rounded-xl">
				<Text
					className="text-4xl text-[#04D4F0] text-center mt-10"
					style={[styles.fontMain, styles.strokeEffect]}
				>
					Create Account
				</Text>
				<Image
					className="flex mx-auto mt-10 rounded-md"
					source={plant}
					style={{ width: 100, height: 100 }}
				/>
				<View className="flex mx-10 mt-4">
					<Text className="text-lg" style={styles.fontSecundary}>
						Your Plant
					</Text>

					<TextInput
						onChangeText={(text) => {
							plantRef.current = text
						}}
						className="border-2 mb-5 w-full border-gray-700 bg-gray-100 rounded-md mt-2 px-2 py-1"
						style={styles.fontSecundary}
					/>
					<Text className="text-lg" style={styles.fontSecundary}>
						UserName
					</Text>

					<TextInput
						onChangeText={(text) => {
							userNameRef.current = text
						}}
						className="border-2 mb-5 w-full border-gray-700 bg-gray-100 rounded-md mt-2 px-2 py-1"
						style={styles.fontSecundary}
					/>

					<Text className="text-lg" style={styles.fontSecundary}>
						Email
					</Text>

					<TextInput
						onChangeText={(text) => {
							emailRef.current = text
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
						onTouchEnd={createUser}
					>
						<Text
							style={[styles.fontMain, styles.strokeEffect]}
							className="text-white text-center text-lg"
						>
							Sign Up
						</Text>
					</View>
					<View className="flex flex-row gap-2 justify-center mt-2">
						<Text className="text-lg" style={styles.fontSecundary}>
							Already have an account?
						</Text>
						<View
							onTouchEnd={() => {
								router.push("/login")
							}}
						>
							<Text
								style={styles.fontSecundary}
								className="text-blue-600 text-lg"
							>
								Go to Login
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
