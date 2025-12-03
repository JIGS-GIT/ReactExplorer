import { useState } from "react";

function ListModule() {
   
   const numbers = [2, 11, 10, 13, 22, 17,34,55,66];
  const filtered = numbers.filter((num) => num % 2 == 0);
  const items = ["DragonFruite", "Pomegranate", "CustardApple", "Grapes"];
  return (
    <div>
      <h2> Filtered</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        <p>Even number : {filtered.join(" ; ")} </p>
    </div>
  );
  

}

export default ListModule;