const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigit(text) {
  return text.toString().replace(/[0-9]/g, (w) => numbers[+w]);
}

//  کار این بخش رو فهمیدم ولی سوال اینه که  یکی این پترن رو توضیح بده و یکی هم اون w مخصوصا اون پلاسش
