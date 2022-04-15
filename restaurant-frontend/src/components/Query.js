import React from "react";
import { useQuery } from "@apollo/client";
import ITEMS_QUERY from "../utils/queries/itemsQuery"

const Query = ({ children }) => {
  const { data, loading, error } = useQuery(ITEMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children({ data })
};

export default Query;