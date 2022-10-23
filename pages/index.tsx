import { useQuery } from "@tanstack/react-query";
import { makeApi, makeEndpoint, Zodios } from "@zodios/core";
import { ZodiosHooks } from "@zodios/react";
import axios from "axios";
import type { NextPage } from "next";
import { z } from "zod";

const response = z.object({ name: z.string() });

const helloEndpoint = makeEndpoint({
  alias: "hello",
  method: "get",
  path: "api/hello",
  response: response,
});
const apiClient = new Zodios("/", [...makeApi([helloEndpoint])]);
// apiClient.hello().then((res) => {
//   console.log("zodios", res);
// });

const apiHook = new ZodiosHooks("api", apiClient);

const Home: NextPage = () => {
  // const query = useQuery(["hello"], () => apiClient.hello());
  const query = apiHook.useHello();

  return <div>hello world</div>;
};

export default Home;
