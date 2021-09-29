export const SortDatabyWord = (data, word) =>
  data.filter((e) => e.mission_name.toLowerCase().includes(word));
