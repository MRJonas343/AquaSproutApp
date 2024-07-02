import { View, Text } from "react-native"
import { Link } from "expo-router"
const Page = () => {
	return (
		<View>
			<Text>Dashboard</Text>

			<Link href="/login">Login</Link>
		</View>
	)
}
export default Page
