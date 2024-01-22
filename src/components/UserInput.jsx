export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" min="0" />
        </p>
        <p>
          <label>Expected Return</label>
          <input type="number" min="0" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>
          <input type="number" min="0" />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" min="0" />
        </p>
      </div>
    </div>
  );
}
