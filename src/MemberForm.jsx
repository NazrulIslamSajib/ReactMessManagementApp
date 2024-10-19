import React, { useState } from "react";

const MemberForm = ({ onSubmit }) => {
  const [memberCount, setMemberCount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(memberCount);
  };

  return (
    <form onSubmit={handleSubmit} className="member-form">
      <label>How many members in your mess?</label>
      <input
        type="number"
        value={memberCount}
        onChange={(e) => setMemberCount(parseInt(e.target.value))}
        required
        className="member-input"
      />
      <button type="submit" className="member-submit-button">Submit</button>
    </form>
  );
};

export default MemberForm;
