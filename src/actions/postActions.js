export const deletPost = (id) => {
  return {
    type: "DELETE_POST",
    id,
  };
};
