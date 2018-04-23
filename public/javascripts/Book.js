class Book{
	/**constructor allows SOMETHING properties while ?
		THIS. is built into JS. tells JS that title should only affect one specific object
		ex. there are multiple mice for computers in a room but when i scroll mine, it only
		scrolls mine, not everyones mouse in the room
		THE PROMPTINFO.. TAKES HOW WE DEFINED TITLE,ETC UNDER CONSTRUCTOR AND USE IT IN PROMTINFO?
	*/

	constructor(title,author,imgurl){
		this.title = title;
		this.author = author;
		this.imgurl = imgurl;
	}

	promptInformation(){
		const img = prompt('img');
		const title = prompt('title');
		const author = prompt('author');
		this.title = title;
		this.author = author;
		this.imgurl = img;

	}


	get getTitle(){
		return this.title;
	}
}