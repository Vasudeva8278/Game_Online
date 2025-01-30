import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Purchase from "./pages/Purchase";
import SubscriptionPage from "./pages/SubscriotionPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="SubscriptionPage" element={<SubscriptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
