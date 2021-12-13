import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { request } from './server'
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { Provider } from "react-redux";
import store from "./store/index"
import { useSelector } from "react-redux";
// TODOタスクの型
export type Task = { label: string; isDone: boolean }


const App: React.VFC = () => {

  const tasks = useSelector((state) => state.tasks);
  // タスクリストを格納する
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>('');


  return (
    <div>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>

      {/* 一覧表示 */}
      <TaskList {...{ lists }} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
