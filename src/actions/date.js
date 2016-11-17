
export const changeDate = () => ({
  type: 'CHANGE_DATE',
  payload: new Date().toISOString(),
});


export const removeDate = () => ({
  type: 'REMOVE_DATE',
});
