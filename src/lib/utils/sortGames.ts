const sortBy = <T>(
  values: T[],
  property: keyof T,
  order: SortOrder = "ASC"
) => {
  return values.toSorted((value1, value2) => {
    if (value1[property] > value2[property]) return order === "ASC" ? -1 : 1;
    else if (value1[property] < value2[property])
      return order === "ASC" ? 1 : -1;

    return 0;
  });
};

export default sortBy;
