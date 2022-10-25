const gsTitle = {
	init() {
		this._root = document.querySelector("#gsTitle");
		this._titles = this._root.querySelectorAll(".gsTitle-title");
		this._frame = this._frame.bind(this);
		this.setTexts([
			"CodeLabs",
			"cOdelAbS",
			"sqɐlǝpoƆ",
			"कोडलॅब्स",
			"コードラボ¡",
		]);
	},
	on() {
		if (!this._frameId) {
			this._frame();
		}
	},
	off() {
		clearTimeout(this._frameId);
		this._textContent(this._text);
		delete this._frameId;
	},
	setTexts([text, ...alt]) {
		this._text = text;
		this._textAlt = alt;
	},

	// private:
	_text: "",
	_textAlt: [],
	_rand(n) {
		return (Math.random() * n) | 0;
	},
	_textContent(txt) {
		this._titles.forEach((el) => (el.textContent = txt));
	},
	_frame() {
		const txt = Array.from(this._text);

		for (let i = 0; i < 6; ++i) {
			const ind = this._rand(this._text.length);

			txt[ind] = this._textAlt[this._rand(this._textAlt.length)][ind];
		}
		this._textContent(txt.join(""));
		this._root.classList.add("gsTitle-glitched");
		setTimeout(() => {
			this._textContent(this._text);
			this._root.classList.remove("gsTitle-glitched");
		}, 50 + Math.random() * 200);
		this._frameId = setTimeout(this._frame, 250 + Math.random() * 500);
	},
};

gsTitle.init();
gsTitle.on();

//Codelabs fade out and explore fade in

const aboutbg = document.querySelector("#gsTitle");
const tagLine = document.querySelector(".tagline");

const tl = new TimelineMax();

tl.fromTo(
	aboutbg,
	3,
	{ opacity: 1 },
	{ opacity: 0, ease: Power2.easeInOut }
).fromTo(tagLine, 3, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });
