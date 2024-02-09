type Args<T> =
  | {
      data: T[];
      order?: SortOrder;
      accessor?: never;
    }
  | {
      data: T[];
      order?: SortOrder;
      accessor: keyof T;
    };

const sortBy = <T>({ data, order = "ASC", accessor }: Args<T>) => {
  // TODO: .toSorted() method throws error during deployment. Fix this error
  if (accessor)
    return data?.sort((value1, value2) => {
      if (value1[accessor] > value2[accessor]) return order === "ASC" ? 1 : -1;
      else if (value1[accessor] < value2[accessor])
        return order === "ASC" ? -1 : 1;

      return 0;
    });
  else {
    return data?.sort((value1, value2) => {
      if (value1 > value2) return order === "ASC" ? 1 : -1;
      else if (value1 < value2) return order === "ASC" ? -1 : 1;

      return 0;
    });
  }
};

export default sortBy;
