import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    expectedReturn: 0,
    annualInvestment: 0,
    duration: 0,
  });

  function handleChange(inputName, inputValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue,
      };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            min="0"
            onChange={(event) =>
              handleChange("initialInvestment", +event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            min="0"
            onChange={(event) =>
              handleChange("expectedReturn", +event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            min="0"
            onChange={(event) =>
              handleChange("annualInvestment", +event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            min="0"
            onChange={(event) => handleChange("duration", +event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </div>
  );
}
