import { StackScreenWithSearchBar } from "constants/layout"
import { Stack } from "expo-router"
import { View } from "react-native"
import { defaultStyles } from "styles"
const PlaylistScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: "Playlist" }}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistScreenLayout
