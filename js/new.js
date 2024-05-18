function calculateVolumeAndArea(num) {
  if (typeof num === "string" || !Number.isInteger(num) || num <=0) {
    return "При вычислении произошла ошибка";
  } else {
    return `Объем куба: ${num * num * num}, площадь всей поверхности: ${
      6 * (num * num)
    }`;
  }
}

calculateVolumeAndArea(5);
