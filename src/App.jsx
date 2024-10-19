import React, { useState } from "react";
import Login from "./Login";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";
import ResultTable from "./ResultTable";
import DownloadButton from "./DownloadButton";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [members, setMembers] = useState([]);
  const [finalResults, setFinalResults] = useState([]);
  const [vuyaBill, setVuyaBill] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalMill, setTotalMill] = useState(0);
  const [millRate, setMillRate] = useState(0);

  const handlePasswordSubmit = (password) => {
    if (password === "sajib") {
      setIsAuthenticated(true);
    } else {
      setAttempts(attempts + 1);
    }
  };

  const handleMemberSubmit = (memberCount) => {
    const emptyMembers = Array.from({ length: memberCount }, () => ({ name: "", bazarCost: "", millCount: "" }));
    setMembers(emptyMembers);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const calculateCosts = () => {
    let totalBazarCost = 0;
    let totalMills = 0;

    members.forEach((member) => {
      totalBazarCost += parseInt(member.bazarCost);
      totalMills += parseInt(member.millCount);
    });

    setTotalCost(totalBazarCost);
    setTotalMill(totalMills);
    const rate = totalBazarCost / totalMills;
    setMillRate(rate);

    const results = members.map((member) => {
      const balance = member.bazarCost - (vuyaBill + rate * member.millCount);
      return { name: member.name, balance: balance.toFixed(2) };
    });

    setFinalResults(results);
  };

  return (
    <div className="container">
      <h1>Welcome to our Bachelor's Software</h1>
      {!isAuthenticated && <Login onSubmit={handlePasswordSubmit} attempts={attempts} />}
      {isAuthenticated && (
        <>
          <MemberForm onSubmit={handleMemberSubmit} />
          {members.length > 0 && (
            <>
              <MemberList members={members} onMemberChange={handleMemberChange} />
              <div className="vuya-bill">
                <label>Enter Vuya Bill:</label>
                <input type="number" value={vuyaBill} onChange={(e) => setVuyaBill(parseInt(e.target.value))} />
                <button onClick={calculateCosts} className="calculate-button">Calculate Costs</button>
              </div>
              <ResultTable results={finalResults} millRate={millRate} totalCost={totalCost} totalMill={totalMill} />
              <DownloadButton results={finalResults} totalCost={totalCost} totalMill={totalMill} millRate={millRate} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;