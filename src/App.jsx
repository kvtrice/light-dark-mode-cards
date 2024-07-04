import Card from "./components/Card/Card";
import Flex from "./components/Flex/Flex";

function App() {
	let array = new Array(10).fill(0);

	return (
		<>
			<Flex>
				{array.map(() => (
					<Card />
				))}
			</Flex>
		</>
	);
}

export default App;
