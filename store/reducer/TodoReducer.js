import { ADD_TODO } from "../action/TodoActions";

const initialState = {
  todo: [],
  count: 3,
};

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

    default:
      return state;
  }

  return state;
};
