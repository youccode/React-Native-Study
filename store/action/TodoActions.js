// 1. todo 추가
// 2. todo 수정

export const ADD_TODO = "ADD_TODO";

export const addTodo = (title, content) => {
  return async (dispatch, getState) => {
    //Baekend 관련 연산 및 async code가 가능 fetch code를 이용하여 서버와 연결
    //firebase에서 가져온  url 뒤에 dir를 만드는 것으로 원하는 dir에 생성 가능.
    //firebase만이 지원하는 기능임.
    // ++ firebase에서는 custionId를 제공해줌.
    const userId = getState().auth.userId;
    const token = getState().auth.token;
    console.log(getState().auth);
    console.log(token);
    const response = await fetch(
      `https://rn-education-7056d-default-rtdb.asia-southeast1.firebasedatabase.app/${userId}/todo.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, content: content }),
      }
    );

    // 실행된 code에 대하여 어떻게 되었는지 결과를 확인하기
    // 위해서 필요한 code임.
    const resData = await response.json();

    console.log(resData);

    // 아래 라인이 실행되면, 원래대로 action object가 reducer에 전달됨.
    dispatch({
      type: ADD_TODO,
      id: resData.name,
      title: title,
      content: content,
    });
  };

  // return { type: ADD_TODO, id: id, title: Title, content: content }; // object를 return
};

export const EDIT_TODO = "EDIT_TODO";

export const editTodo = (id, title, content) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://rn-education-7056d-default-rtdb.asia-southeast1.firebasedatabase.app/testUser1/todo/${id}.json`,
      {
        method: "PATCH" /* Data를 덮어씌우는 것은 PUT과 PATCh가 있음. 
                         PUT은 Data 전체를 덮어씌우는 것, PATCH는 원하는 변화 정보만 바꿀 수 있음.*/,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, content: content }),
      }
    );
    const resData = await response.json();

    dispatch({ type: EDIT_TODO, id: id, title: title, content: content });
  };

  //return { type: EDIT_TODO, id: id, title: title, content: content };
};

export const FETCH_TODO = "FETCH_TODO";

export const fetchTODO = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const token = getState().auth.token;
    const response = await fetch(
      `https://rn-education-7056d-default-rtdb.asia-southeast1.firebasedatabase.app/${userId}/todo.json?auth=${token}`,
      {
        method: "GET", //fetch가 가지고 있는 default 값임. 사실 표기 안해도 됨.
      }
    );

    const resData = await response.json();
    let todoArray = [];
    console.log(resData);
    for (const key in resData) {
      todoArray.push({
        id: key,
        title: resData[key].title,
        content: resData[key].content,
      });
    }

    dispatch({ type: FETCH_TODO, todo: todoArray });
  };
};
