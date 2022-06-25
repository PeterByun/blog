type FetchParams = Parameters<typeof window.fetch>;

export const fetchJson = <T>(...params: FetchParams): Promise<T> => {
  return window
    .fetch(...params)
    .then((response) => response.json() as Promise<T>);
};
