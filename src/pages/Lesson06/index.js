import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  const data = input.map( ({gender, x:weight, y:height}) => ({color:(gender === '男性' ? 'blue' : 'red'), gender, bmi:( weight / (Math.pow(height / 100, 2)) ) , weight, height}) );
  console.log(data);
  return data; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
