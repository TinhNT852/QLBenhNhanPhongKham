import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AccountTable from "./components/account/AccountTable";
import Authorization from "./components/account/control/Authorization";
import ListAcc from "./components/account/control/ListAcc";
import HomePage from "./components/home/HomePage";
import DashBoard from "./components/navigate/DashBoard";
import ProductsPage from "./components/product/ProductPage";
import CustomerTable from "./components/userlist/CustomerTable";
import ContractDetails from "./components/userlist/contract/ContractDetails";
import CustomerData from "./components/userlist/customers/CustomerData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route index element={<Navigate to ="/home" replace/>}/>
          <Route index element ={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/users" element={<AccountTable />}>
            <Route index element={<Navigate to ="/users/list" replace/>}/>
            <Route path="/users/list" element={<ListAcc />} />
            <Route path="/users/author" element={<Authorization />}/>
          </Route>
          <Route path="/details" element={<ContractDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/customers" element={<CustomerTable />} />
          <Route path="/data" element={<CustomerData />} />
          {/* <Route path="/settings" element={<AdvancedSearchForm />} /> */}
          {/* <Route path="notification" element={<NotificationPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;