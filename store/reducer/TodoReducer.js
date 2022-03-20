import { ADD_TODO, EDIT_TODO, FETCH_TODO } from "../action/TodoActions";

const initialState = {
  todo: [],
  count: 3,
};
// state = initialState는 state가 아무것도 없을 때, default값을 지정해주기 위함임.
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // 상황에 따른 필요 코드
      // state -> 불변
      //state cannote ve modified 살짝 Java String 느낌인듯.
      //=> state을 복사해와서 새로운 state을 return 해주는 것임.
      const newArray = [
        { id: action.id, title: action.title, content: action.content },
        ...state.todo,
      ];
      return { ...state, todo: newArray };

    case EDIT_TODO:
      //id를 이용하여 match가 되는 object를 가져옴 => 수정
      const index = state.todo.findIndex((elem) => {
        return elem.id === action.id;
      });
      // 찾지 못한 경우
      if (index === -1) {
        console.log;
        ongamepadconnected("Error");
        return state;
      }

      //찾은 경우
      //todo 자체를 변환할 수 없기에 아래와 같은 차례가 꼭 필요하다는 것을 기억해야 함.
      const editedArr = [...state.todo];
      editedArr[index] = {
        id: action.id,
        title: action.title,
        content: action.content,
      };

      return { ...state, todo: editedArr };

    case FETCH_TODO:
      return { ...state, todo: action.todo };
    default:
      return state;
  }

  return state;
};
