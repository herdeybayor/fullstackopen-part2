import Content from "./Content";
import Header from "./Header";

export default function Course({ name, parts }) {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
    </>
  );
}
