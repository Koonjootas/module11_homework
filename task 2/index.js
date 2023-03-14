// Задание 2
/*
Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
*/

export function getPercents(percent, number) {
  let onePercent = number / 100;
  let result = onePercent * percent;
  return result;
}
