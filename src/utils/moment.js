export function gregorianToHijri(date) {
  const gDay = date.getDate();
  const gMonth = date.getMonth() + 1;
  const gYear = date.getFullYear();

  let jd =
    parseInt((1461 * (gYear + 4800 + parseInt((gMonth - 14) / 12))) / 4) +
    parseInt((367 * (gMonth - 2 - 12 * parseInt((gMonth - 14) / 12))) / 12) -
    parseInt(
      (3 * parseInt((gYear + 4900 + parseInt((gMonth - 14) / 12)) / 100)) / 4
    ) +
    gDay -
    32075;

  let l = jd - 1948440 + 10632;
  let n = parseInt((l - 1) / 10631);
  l = l - 10631 * n + 354;
  let j =
    parseInt((10985 - l) / 5316) * parseInt((50 * l) / 17719) +
    parseInt(l / 5670) * parseInt((43 * l) / 15238);
  l =
    l -
    parseInt((30 - j) / 15) * parseInt((17719 * j) / 50) -
    parseInt(j / 16) * parseInt((15238 * j) / 43) +
    29;

  let iMonth = parseInt((24 * l) / 709);
  let iDay = l - parseInt((709 * iMonth) / 24);
  let iYear = 30 * n + j - 30;

  // Format the date in YYYY/MM/DD format
  return `${iYear}/${(iMonth + 1).toString().padStart(2, "0")}/${iDay
    .toString()
    .padStart(2, "0")}`;
}
