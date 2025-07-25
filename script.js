const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkPalindrome = input => {
  const ogInput = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }

  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
  let resultMsg = `${ogInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not' 
    } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerText = resultMsg;
  resultDiv.appendChild(pTag);

  result.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    checkPalindrome(userInput.value);
    userInput.value = "";
  }
});