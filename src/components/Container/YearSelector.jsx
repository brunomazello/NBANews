import { useState } from "react";
import { Container, List, Paragraph, Title, Input } from "./Home";

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
        min={1946}
        max={new Date().getFullYear()}
      />
      <p>{year}</p>
    </Container>
  );
}
export default YearSelector;
