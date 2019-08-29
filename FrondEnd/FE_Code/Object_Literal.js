var Human = {
	name : "Simpson",
    age : 0,
    have : "",
	makeMeal(ingredients) {
		this.have = ingredients;
	},
	eatMeal(meal) {
		console.log(meal + "을(를) 먹었습니다.")
	}
}

console.log(Human.name);
// "Simpson"
Human.age = 100;
console.log(Human.age);
// "100"
Human.makeMeal("당근");
Human.eatMeal(Human.have);
// "당근을(를) 먹었습니다."