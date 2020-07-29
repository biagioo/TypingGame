export const setDifficulties = (difficulties) => ({
  type: 'SET_DIFFICULTIES',
  payload: difficulties,
});

export const fetchDifficulties = () => {
  return (dispatch) => {
    return fetch('https://typing-game-api.herokuapp.com/difficulties')
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setDifficulties(data));
      });
  };
};
