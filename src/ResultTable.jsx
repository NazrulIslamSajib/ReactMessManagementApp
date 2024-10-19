import React from "react";

const ResultTable = ({ results, millRate, totalCost, totalMill }) => {
  return (
    <div>
      <p>Total Cost of Bazar: {totalCost}</p>
      <p>Total Mill: {totalMill}</p>
      <p>Mill Rate: {millRate.toFixed(5)}</p>

      <h2>Final Results</h2>
      <table className="result-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{result.name}</td>
              <td>{result.balance > 0 ? `Gets: ${result.balance}` : `Pays: ${-result.balance}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
