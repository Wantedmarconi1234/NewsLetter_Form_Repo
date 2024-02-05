import React from "react"
import Card from "./components/Card";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider} from "react-router-dom"
import FormSubmitted from "./components/FormSubmitted";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Card/>}/>
    <Route path="submitted" element={<FormSubmitted/>}/>
  </Route>
 
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
