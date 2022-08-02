const adviceId = document.querySelector(".advice-id"),
  quote = document.querySelector(".quote"),
  btn = document.querySelector(".btn");

btn.addEventListener("click", GetAdvice);

async function GetAdvice() {
  let url = "https://api.adviceslip.com/advice";

  let res = await fetch(url, {
    cache: "reload",
  });
  let data = await res.json();

  adviceId.textContent = data.slip.id;
  quote.textContent = `“${data.slip.advice}”`;
}

GetAdvice();
