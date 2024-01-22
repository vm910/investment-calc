import img from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={img} alt="calc" />
      <h1>INVESTMENT CALCULATOR</h1>
    </header>
  );
}
