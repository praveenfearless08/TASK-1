import styles from "./ListRow.module.css";

const ListCell = ({
  children,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
  value,
}) => {
  const handleClick = () => {
    setSelectedOrderDetails(value.executionDetails);
    setSelectedOrderTimeStamps(value.timeStamps);
  };
  return (
    <tr className={styles.cell} onClick={handleClick}>
      {children}
    </tr>
  );
};

export default ListCell;
