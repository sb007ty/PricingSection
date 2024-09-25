const btn = document.querySelector(".button-sec");
const card = document.querySelector(".cards-container");
const allCards = document.querySelectorAll(".card");

// btn.addEventListener("click", clickBtn);
card.addEventListener("click", clickCard);

function clickCard(e) {
  const clickedNode = e.target;
  const parentCard = clickedNode.closest(".card");
  if (!parentCard) return;
  for (let i = 0; i < allCards.length; i++) {
    let card = allCards.item(i);
    card.classList.remove("card-active");
  }
  parentCard.classList.add("card-active");
  //   console.log(parent);
}
