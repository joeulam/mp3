import { useState } from "react";

export function addition(firstVal: number, secondVal: number) {
  const result = firstVal + secondVal;
  let color = "";
  if (result < 0) {
    color = "red";
  } else {
    color = "black";
  }
  return { total: result, isPos: color };
}

export function subtraction(firstVal: number, secondVal: number) {
  const result = firstVal - secondVal;
  let color = "";
  if (result < 0) {
    color = "red";
  } else {
    color = "black";
  }
  return { total: result, isPos: color };
}

export function multiplication(firstVal: number, secondVal: number) {
  const result = firstVal * secondVal;
  let color = "";
  if (result < 0) {
    color = "red";
  } else {
    color = "black";
  }
  return { total: result, isPos: color };
}

export function division(firstVal: number, secondVal: number) {
  const result = firstVal / secondVal;
  let color = "";
  if (result < 0) {
    color = "red";
  } else {
    color = "black";
  }
  return { total: result, isPos: color };
}

export function powerFunction(firstVal: number, secondVal: number) {
  let result = 1;
  let color = "";
  if (secondVal < 0) {
    secondVal *= -1;
    let div = 1;
    for (let i = 0; i < secondVal; i++) {
      div *= firstVal;
    }
    result = 1 / div;
  } else {
    for (let i = 0; i < secondVal; i++) {
      result *= firstVal;
    }
  }

  if (result < 0) {
    color = "red";
  } else {
    color = "black";
  }
  return { total: result, isPos: color };
}

export interface ResponseData {
  total: number;
  isPos: string;
}


export function useProcessFunctionData(){
  const [color, setColor] = useState("");
  const [result, setResult] = useState("");
  function processFunctionData(data: ResponseData){
    setColor(data.isPos)
    setResult(data.total.toString())
  }
  return { color, result, processFunctionData };
}

