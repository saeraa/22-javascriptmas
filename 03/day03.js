const faveFoods = {
	breakfast: "brains 🧠",
	lunch: "coffee ☕",
	supper: "naughty children 🧒🏻"
};

const { breakfast, lunch, supper } = faveFoods;

document.querySelector("#meals").textContent = `
    For breakfast, I like ${breakfast}. For lunch, I want to have ${lunch},
    and for supper I usually eat ${supper}.
`;
