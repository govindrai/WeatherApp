const API_KEY = 0c0d5451b069323bb6170294b1655f20


export default function(state = null, action) {
  switch (action.type) {
    case "GET_WEATHER":
      return action.payload;
  }

  return state;
}
