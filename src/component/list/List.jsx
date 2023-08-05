import React from "react";
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";
import timeStamps from "../../assets/timeStamps.json";

const List = ({
  rows,
  currency,
  searchText,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
}) => {
  const getOrderSubmittedDate = (orderId) => {
    const timestamp = timeStamps.results.find((ts) => ts["&id"] === orderId);
    return timestamp ? timestamp.timestamps.orderSubmitted : "N/A";
  };

  const filteredRows = rows.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filteredRows.map((row, i) => (
          <ListRow
            key={i}
            value={row}
            setSelectedOrderDetails={setSelectedOrderDetails}
            setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
          >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{getOrderSubmittedDate(row["&id"])}</ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[currency]}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
