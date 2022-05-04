import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  //console.log(input.slice(0, 20));
  //console.log(input.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, 20));
  return input.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, 20); // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
