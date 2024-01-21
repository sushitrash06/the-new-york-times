import { Navigate, Route, Routes } from "react-router-dom";
import ArtsPage from "./Page/Arts";
import AutomobilesPage from "./Page/Automobiles";
import FoodPage from "./Page/Food";
import FashionPage from "./Page/Fashion";
import HomePage from "./Page/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arts" element={<ArtsPage />} />
      <Route path="/automobile" element={<AutomobilesPage />}/>
      <Route path="/food"  element={<FoodPage />} />
      <Route path="/fashion"  element={<FashionPage />}/>
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
