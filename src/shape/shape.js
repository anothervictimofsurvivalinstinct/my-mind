MM.Shape = Object.create(MM.Repo, {
	VERTICAL_OFFSET: {value: 0.5},
});

MM.Shape.set = function(item) {
	item.dom.node.classList.add("shape-"+this.id);
	return this;
}

MM.Shape.unset = function(item) {
	item.dom.node.classList.remove("shape-"+this.id);
	return this;
}

MM.Shape.update = function(item) {
	item.dom.content.style.borderColor = item.getColor();
	return this;
}

MM.Shape.getHorizontalAnchor = function(item) {
	const { contentPosition, contentSize } = item;
	return Math.round(contentPosition[0] + contentSize[0]/2) + 0.5;
}

MM.Shape.getVerticalAnchor = function(item) {
	const { contentPosition, contentSize } = item;
	return contentPosition[1] + Math.round(contentSize[1] * this.VERTICAL_OFFSET) + 0.5;
}
