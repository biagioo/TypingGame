export const postScore = (newScore) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScore),
    }).then((resp) => {
      return resp.json();
    });
  };
};

export const setAllScores = (scores) => ({type: 'ALL_SCORES', payload: scores});

export const fetchAllScores = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/scores')
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setAllScores(data));
      });
  };
};
