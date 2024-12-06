import { useState, useEffect } from "react";
import Loading from "../Loading";
import "./index.css";

function Sheets() {
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://sa-chits-backend.onrender.com/sheets"
        );
        const data = await response.json();

        if (response.ok) {
          setSheets(data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(sheets, "sheets");
  const memberDetails = {
    memberId: sheets[0]?.[1] || "N/A",
    name: sheets[0]?.[4] || "N/A",
    totalCollected: sheets[3]?.[0] || "N/A",
    balanceAmount: sheets[3]?.[3] || "N/A",
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="invoice-container">
          <div className="header">
            <div className="member-info">
              <p>
                <strong>Member ID:</strong> {memberDetails.memberId}
              </p>
              <p>
                <strong>Total Collected Amount:</strong>
                <span className="collected-amount">
                  ₹{memberDetails.totalCollected}
                </span>
              </p>
            </div>
            <div className="member-info">
              <p>
                <strong>Name:</strong> {memberDetails.name}
              </p>
              <p>
                <strong>Balance Amount:</strong>
                <span className="balance-amount">
                  ₹{memberDetails.balanceAmount}
                </span>
              </p>
            </div>
          </div>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Sl no</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Time Stamp</th>
              </tr>
            </thead>
            <tbody>
              {sheets.slice(6).map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1] ? `${row[1]}` : "-"}</td>
                  <td>{row[2] || "-"}</td>
                  <td>{row[3] || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Sheets;
