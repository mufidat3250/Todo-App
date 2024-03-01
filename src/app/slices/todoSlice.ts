import { createSlice} from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

const initialValue:{filterStatus:string, todoList:Array<{title:string, status:string, date:string}>, isChecked:boolean} = {
  todoList: getInitialTodo(),
  filterStatus : 'All',
  isChecked: false
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        let  todoListArr = JSON.parse(todoList);
        const todoItem = todoListArr.find(
          (todo:{id:string}) => todo.id === action.payload.id
        );
       
       todoListArr = todoListArr.map((todo:{id:string}) =>
          todo.id !== todoItem.id
            ? { ...todo }
            : {
                ...todo,
                title: action.payload.title,
                status: action.payload.status,
              }
        );
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
        state.todoList = todoListArr
      }
    },
    deleteTodo: (state, action) => {
    //   console.log(current(state.todoList));
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const remainingTodoArr = todoListArr.filter(
          (todo:{id:string}) => todo.id !== action.payload
        );
        window.localStorage.setItem(
          "todoList",
          JSON.stringify(remainingTodoArr)
        );
        state.todoList = remainingTodoArr;
      }
    },
    updateFilter: (state, action) => {
        state.filterStatus = action.payload
    },
    updateCheckBox: (state, action) => {
      state.isChecked = action.payload
    }
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilter, updateCheckBox} = todoSlice.actions;
export default todoSlice.reducer;
