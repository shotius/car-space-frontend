interface Props {
  query: URLSearchParams;
  queryName: string;
}

export const deleteQueryFromURL = ({ query, queryName }: Props) => {
  Array.from(query.keys()).forEach((q) => {
    if (q.includes(`${queryName}`)) {
      query.delete(q);
    }
  });
};
