function multiplyBy()
{
  num1 = document.getElementById(
    "first_number").value;
  num2 = document.getElementById(
    "second_number").value;
  alert("The result is " + (document.getElementById(
    "result").innerHTML = num1 * num2));
}