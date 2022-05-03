const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");

const facts = [
	"A crocodile cannot stick its tongue out.",
	"A shrimp's heart is in its head.",
	"It is physically impossible for pigs to look up into the sky.",
	"Rubber bands last longer when refrigerated.",
	"A shark is the only known fish that can blink with both eyes.",
	"A cat has 32 muscles in each ear.",
	"The giant squid has the largest eyes in the world.",
	"Most people fall asleep in seven minutes.",
	"Stewardesses is the longest word that is typed with only the left hand.",
	"An ostrich's eye is bigger than its brain.",
];

const day = new Date();
currentDay.textContent = day.toLocaleString("eng", { weekday: "long" });
const showRandom = () => {
	const number = Math.floor(Math.random() * (facts.length - 1));

	funFact.textContent = facts[number];
};
showRandom();
