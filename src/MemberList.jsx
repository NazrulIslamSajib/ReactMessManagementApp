import React from "react";

const MemberList = ({ members, onMemberChange }) => {
  return (
    <div>
      <h2>Enter Member Details</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Bazar Cost</th>
            <th>Mill Count</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"  
                  placeholder="Enter Name"
                  value={member.name}
                  onChange={(e) => onMemberChange(index, "name", e.target.value)}
                  required
                />
              </td>
              <td> 
                <input
                  type="number" 
                  placeholder="Bazar Cost "
                  value={member.bazarCost}
                  onChange={(e) => onMemberChange(index, "bazarCost", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number" 
                  placeholder="Mill Count"
                  value={member.millCount}
                  onChange={(e) => onMemberChange(index, "millCount", e.target.value)}
                  required
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
