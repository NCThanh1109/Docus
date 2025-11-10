import React from "react";
import "katex/dist/katex.min.css"; // Import CSS trực tiếp nếu chưa thêm vào config
import TeX from "@matejmazur/react-katex"; // Cần cài thêm thư viện này

// Lưu ý: Cần cài thêm thư viện react-katex: npm install @matejmazur/react-katex

export default function MathBlock({ formula }) {
  return (
    <div style={{ margin: "20px 0", overflowX: "auto" }}>
      <TeX math={formula} displayMode={true} />
    </div>
  );
}
