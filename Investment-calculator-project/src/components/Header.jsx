import logoImage from "/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
        <img src={logoImage} alt="investment-calculator-logo" />
        <h1>Investment Calculator</h1>
    </header>
  );
}