import { Navigate, Route, Routes } from "react-router-dom";
import ArtsPage from "./Page/Arts";
import AutomobilesPage from "./Page/Automobiles";
import BusinessPage from "./Page/Business";
import EconomyPage from "./Page/Economy";
import HomePage from "./Page/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arts" element={<ArtsPage />} />
      <Route path="/automobiles" element={<AutomobilesPage />}/>
      <Route path="/Business"  element={<BusinessPage />} />
      <Route path="/Economy"  element={<EconomyPage />}/>
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};
