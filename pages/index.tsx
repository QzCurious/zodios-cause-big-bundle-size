import type { NextPage } from "next";
import axios from "axios";
import { z } from "zod";

const response = z.object({ name: z.string() });
type Response = z.infer<typeof response>;

axios.get<Response>("/api/hello").then((res) => {
  console.log(response.parse(res.data));
});

const Home: NextPage = () => {
  return <div>hello world</div>;
};

export default Home;
