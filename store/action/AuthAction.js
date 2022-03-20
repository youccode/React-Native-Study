export const SIGN_UP = "SIGN_UP";

export const signUp = (email, pw) => {
  return async (dispatch) => {
    //회원 가입 과정
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC96WVDZ7B-noj_2jTmDiNmfWiHoETQRsc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pw,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SIGN_UP,
      token: resData.idToken,
      userId: resData.localId,
    });
  };
};

export const LOGIN = "LOGIN";

export const login = (email, pw) => {
  return async (dispatch) => {
    //회원 가입 과정
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC96WVDZ7B-noj_2jTmDiNmfWiHoETQRsc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pw,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: LOGIN,
      token: resData.idToken,
      userId: resData.localId,
    });
  };
};
