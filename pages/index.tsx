import type { NextPage } from "next";
import axios from "axios";

axios.get("/api/hello").then((res) => {
  console.log(res.data);
});

const Home: NextPage = () => {
  return <div>hello world</div>;
};

export default Home;
