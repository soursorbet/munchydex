import { useEffect, useState } from "react";

export default function HomePage({
  existingCategories,
  setExistingCategories,
}) {

  return (
    <div className="page-container">
      <h1>HomePage</h1>
      <p>Website introduction:</p>
      <div className="section-container">
        <h2>Food categories available:</h2>
        {existingCategories.map((existingCategory, index) => (
          <div key={index}>
            <div>Name: {existingCategory.name}</div>
            <div>
              <img
                src={existingCategory.image}
                alt="category"
                width="50"
                height="50"
              />
            </div>
            <div>Description: {existingCategory.briefDesc}</div>
            <br />
          </div>
        ))}
      </div>
      <p>What are some of the reviews available:</p>
    </div>
  );
}
