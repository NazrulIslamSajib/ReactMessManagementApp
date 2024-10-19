import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DownloadButton = ({ results, totalCost, totalMill, millRate }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Bachelor's Software Results", 14, 20);

    // Add total cost, total mills, and mill rate
    doc.setFontSize(12);
    doc.text(`Total Cost of Bazar: ${totalCost}`, 14, 30);
    doc.text(`Total Mills: ${totalMill}`, 14, 40);
    doc.text(`Mill Rate: ${millRate.toFixed(5)}`, 14, 50);

    // Prepare data for the table
    const tableData = results.map((result) => [
      result.name,
      result.balance,
    ]);

    // Add a table
    doc.autoTable({
      head: [["Member Name", "Final Result"]],
      body: tableData,
      startY: 60,
    });

    // Save the PDF
    doc.save("bachelors_software_results.pdf");
  };

  return (
    <button onClick={generatePDF} className="download-button">
      Download PDF
    </button>
  );
};

export default DownloadButton;
