import userData from "./data.js";

function transformData(data) {
	return data.map((data) => {
		return {
			fullName: data.name.first + " " + data.name.last,
			birthday: new Date(data.dob.date).toDateString()
		};
	});
}

console.log(transformData(userData));
