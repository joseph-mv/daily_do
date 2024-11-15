import { useContext, useEffect } from "react";
import { DateContext } from "../contextAPI/context";
import { dateToString } from "../components/main/utils";
import { useSelector } from "react-redux";
import { addTodoToDb } from "../idb/todoService";
import { InitialState } from "../redux/reducers/type";

export const useUpdateIDb = () => {
  console.log('use Update')
  const { date } = useContext(DateContext);
  const dueDate = dateToString(date);
  const todoList = useSelector((store: InitialState) => store.todo[dueDate]);
  useEffect(() => {
    if (todoList) {
      addTodoToDb({ date: dueDate, ...todoList });
    }
  }, [todoList, dueDate]);
};
