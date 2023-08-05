import React, { useState } from "react";
import mockData from "../assets/data.json";
import Card from "../component/card/Card";
import List from "../component/list/List";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Dropdown from "../component/dropdown/Dropdown";
import Search from "../component/search/Search";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const currencyOptions = ["GBP", "USD", "JPY", "EUR"];
  const totalOrders = mockData.results.length;

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${totalOrders} Orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(value) => setSearchText(value)}
          />
          <Dropdown
            options={currencyOptions}
            onSelectChange={(selectedValue) => setCurrency(selectedValue)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />{" "}
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          rows={mockData.results}
          currency={currency}
          setSelectedOrderDetails={setSelectedOrderDetails}
          setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
          searchText={searchText}
        />{" "}
      </div>
    </div>
  );
};

export default Dashboard;
