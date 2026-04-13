const data = [
	{
		author: "Wolf Chan",
		body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><img src='/butter.jpg' /><p>Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.</p>",
		category: "tips",
		comments: 10,
		cover: "butter.jpg",
		date: new Date("01 Jan 2026"),
		id: 1,
		readTime: 2,
		title: "Fear of Fats - the modern conditioning",
		views: 40
	},
	{
		author: "Wolf Chan",
		body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><img src='/hero.png' /><p>Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.</p>",
		category: "recipe",
		comments: 19,
		cover: "hero.png",
		date: new Date("10 Feb 2026"),
		id: 2,
		readTime: 4,
		title: "Sunny Side Up",
		views: 60
	},
	{
		author: "Wolf Chan",
		body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare quis augue quis porttitor. Cras dapibus sed est at aliquam. Pellentesque tempor in elit sed dictum. Nunc at sem ut eros tempor auctor id at augue. Pellentesque efficitur libero at nisi aliquet, et maximus mauris varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><img src='/grocery.jpg' /><p>Donec nisl mauris, tincidunt quis arcu eget, dignissim feugiat nulla. Cras et sapien non eros placerat pharetra sit amet vitae orci. Ut volutpat est id orci pulvinar, in fringilla libero dapibus. Vivamus elementum, nunc sit amet finibus faucibus, ipsum velit feugiat diam, eu bibendum elit magna vel nunc. Maecenas sit amet risus ac ex gravida facilisis ac sed magna. In id lorem nulla. Donec at consequat ex.</p>",
		category: "research",
		comments: 20,
		cover: "grocery.jpg",
		date: new Date("18 Mar 2026"),
		id: 3,
		readTime: 5,
		title: "Too many choices",
		views: 30
	}
];

export function getArticles() {
	return data;
}

export function getArticleWithId(id: number) {
	const res = data.find((entry) => entry.id === id);
	return res;
}