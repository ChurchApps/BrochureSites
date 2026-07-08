import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Deed from "./pages/Deed";
import ShareLegal from "./pages/ShareLegal";
import AdaptLegal from "./pages/AdaptLegal";
import OpenLegal from "./pages/OpenLegal";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/share" element={<Deed tier="share" />} />
        <Route path="/adapt" element={<Deed tier="adapt" />} />
        <Route path="/open" element={<Deed tier="open" />} />
        <Route path="/share-legal" element={<ShareLegal />} />
        <Route path="/adapt-legal" element={<AdaptLegal />} />
        <Route path="/open-legal" element={<OpenLegal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
