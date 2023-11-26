class Computer{
    constructor(maker, model, price){
        this.maker=maker
        this.model=model;
        this.price = price;
    }

    show(){
        let html = "";
		html += "<tr>";
		html += "<td>" + this.maker + "</td>";
		html += "<td>" + this.model + "</td>";
        html += "<td>" + this.price + "</td>";
		html += "</tr>";
		return html;
    }
}

let array = [
    new Computer('HP', 'Laptop 15s-fq5032ua (8F322EA) ', 26999),
    new Computer('Asus', 'X515FA-BQ019', 27999),
    new Computer('Lenovo', 'IdeaPad Gaming 3 15ACH6 (82K20273RA)', 29399)
]

function run(){

	var html = "<table class='b-table'>";
	html += "<tr class='b-table__th'><td>Виробник</td><td>Модель</td><td>Ціна</td></tr>"
	for (i=0;i<array.length;i++){
		html += array[i].show();
	}
	html += "</table>";
	document.getElementById("result").innerHTML = html;
}