import { HeroeList } from "../components";

export const MarvelPage = () => {
  console.log("marvel-work");
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroeList publisher={"Marvel Comics"} />
    </>
  );
};
