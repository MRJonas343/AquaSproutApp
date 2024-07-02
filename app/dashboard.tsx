import { View, Text, Image, Alert } from "react-native"
import { Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"
const sansevieriaImage = require("../src/assets/images/sanseveria.jpg")
const IoTLogo = require("../src/assets/images/iot.png")
const plantLogo = require("../src/assets/images/planta.png")
const chartImage = require("../src/assets/images/chart.png")
const watering = require("../src/assets/images/regando-plantas.png")
const noWatering = require("../src/assets/images/sin-grasa.png")
const Page = () => {
	return (
		<View className="bg-[#04F093] w-screen h-screen flex justify-center">
			<View className="bg-white p-4 w-[90%] flex mx-auto h-[92%] rounded-xl">
				<View className="flex flex-row justify-around">
					<Image className="w-10 h-10" source={IoTLogo} />
					<Text
						className="text-3xl text-[#04D4F0] text-center"
						style={[styles.fontMain, styles.strokeEffect]}
					>
						Aqua Sprout
					</Text>
					<Image className="w-10 h-10" source={plantLogo} />
				</View>
				<Text
					className="text-2xl pb-1 text-[#D7F039] text-left mt-3"
					style={[styles.fontMain, styles.strokeEffect]}
				>
					Sansevieria
				</Text>
				<View className="flex flex-row p-2 gap-5">
					<Image
						className="rounded-md w-28 h-28 border-2 shadow-xl"
						source={sansevieriaImage}
					/>
					<View className="flex justify-center">
						<Text
							className="text-lg text-left pb-2"
							style={[styles.fontSecundary]}
						>
							Number of waterings: 3
						</Text>
						<Text
							className="text-lg text-left pb-4"
							style={[styles.fontSecundary]}
						>
							Last water was at : 18:39
						</Text>
					</View>
				</View>
				<Text
					className="text-2xl mb-2 text-[#04F093] text-center mt-4"
					style={[styles.fontMain, styles.strokeEffect]}
				>
					Humidity
				</Text>
				<View className="flex mx-1 items-center bg-[#04F093] pt-4 rounded-md">
					<LineChart
						data={{
							labels: ["Humidity"],
							datasets: [
								{
									data: [350, 460, 470, 420, 500, 600, 700, 800, 900, 1256],
								},
							],
						}}
						width={Dimensions.get("window").width * 0.8}
						height={220}
						chartConfig={{
							backgroundGradientFrom: "#04F093",
							backgroundGradientTo: "#04F093",
							decimalPlaces: 0,
							color: (opacity = 1) => `rgba(0, 73, 255, ${opacity})`,
							labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
							propsForDots: {
								r: "4",
								strokeWidth: 1,
								stroke: "#0049FF",
							},
							propsForLabels: {
								textAnchor: "end",
							},
							propsForBackgroundLines: {
								stroke: "#FFF",
							},
						}}
						style={styles.tableStyle}
					/>
				</View>

				<Text
					className="text-2xl pb-1 text-[#F0A004] text-center mt-4"
					style={[styles.fontMain, styles.strokeEffect]}
				>
					Actions
				</Text>
				<View className="mx-2">
					<View
						className="w-full flex flex-row justify-around mb-4 bg-[#10E78F] p-4 rounded-md mt-2"
						onTouchEnd={() => {
							Alert.alert("Watering", "Watering the plant")
						}}
					>
						<Image className="w-10 h-10" source={watering} />
						<Text
							style={[styles.fontMain, styles.strokeEffect]}
							className="text-white text-center text-lg mr-3"
						>
							Manual Watering
						</Text>
					</View>
					<View
						className="w-full flex flex-row justify-around mb-4 bg-[#98FB98] p-4 rounded-md mt-2"
						onTouchEnd={() => {
							Alert.alert("Stop Watering", "Stop watering the plant")
						}}
					>
						<Image className="w-10 h-10" source={noWatering} />
						<Text
							style={[styles.fontMain, styles.strokeEffect]}
							className="text-white text-center text-lg mr-3"
						>
							Stop Watering
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
	dropShadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		elevation: 5,
	},
	tableStyle: {
		marginVertical: 8,
		borderRadius: 6,
	},
}
