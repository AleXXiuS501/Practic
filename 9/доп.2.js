let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	console.log(age.value);
}
showUser.call(age, ' Dmitrakov', 'Aleksey');
