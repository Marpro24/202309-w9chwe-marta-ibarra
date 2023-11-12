import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default App;
