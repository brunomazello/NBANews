import { useState } from "react";
import { Container, Input } from "./Home";

export function YearSelector(props) {
  const [year, setYear] = useState("");
  const dateHandler = (e) => {
    setYear(e.target.value);
    props.setYear(e.target.value);
  };
  return (
    <Container>
      <Input
        type="number"
        placeholder="Digite o ano desejado"
        value={year}
        onChange={dateHandler}
        min={1979}
        max={new Date().getFullYear()}
      />
    </Container>
  );
}
export default YearSelector;
