import { Header } from "./Components/Header";
import { RestaurantList } from "./Components/RestaurantList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantList />
    </div>
  );
}
