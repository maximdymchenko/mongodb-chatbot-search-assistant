import { BACKEND_URL, API_VECTOR_TOKEN } from "./config";

export async function ask(type: string, query: string) {
  if (type === "vector-search") {
    const res = await vectorSearch(query);
    return { properties: res };
  } else if (type === "external-search") {
    const res = await externalSearch(query);
    return { ext: res };
  } else if (type === "search-all") {
    const res1 = await vectorSearch(query);
    const res2 = await externalSearch(query);
    return { properties: res1, ext: res2 };
  }
}

async function vectorSearch(query: string) {
  const url = BACKEND_URL + "/api/vector/search";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: API_VECTOR_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const resData = await res.json();
  console.log("vector search result=", resData);
  return resData;
}

async function externalSearch(query: string) {
  const url = BACKEND_URL + "/api/external-search";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const resData = await res.json();
  console.log("external search result=", resData);
  return resData;
}
