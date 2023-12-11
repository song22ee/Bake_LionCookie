//Paper.js

var status = 1;

var background = new Path.Rectangle({
	center: [300, 300],
	size: [600, 600],
	fillColor: '#ffbb99',
});

onMouseDown = function (event) {};

//이 버튼을 누르면 다음장면이 나옴
var next = new Path.Rectangle({
	point: [30, 15],
	size: [110, 40],
	strokeColor: '#993300',
	strokeWidth: 5,
	fillColor: '#993300',
	visible: true,
});

var nextText = new PointText({
	point: [45, 45],
	content: 'NEXT',
	fillColor: 'white',
	fontFamily: '돋움',
	fontWeight: 'bold',
	fontSize: 30,
	visible: true,
});

var basket = new Path.Circle({
	center: [670, 200],
	radius: 130,
	fillColor: '#be8c5b',
	strokeColor: '#a47341',
	strokeWidth: 30,
	visible: true,
});

basket2 = basket.clone();
basket3 = basket.clone();
basket4 = basket.clone();
basket2.position = [670, 520];
basket3.position = [980, 520];
basket4.position = [980, 200];

//장면 2의 오븐의 겉표면
var redoven1 = new Path.Rectangle({
	point: [700, 350],
	size: [500, 350],
	strokeColor: '#c2c2d6',
	fillColor: '#a4a4c1',
});
//장면 2의 오븐의 안
var yellowoven = new Path.Rectangle({
	point: [760, 400],
	size: [270, 250],
	fillColor: '#4d4d4d',
});

var oven = new Group({
	children: [redoven1, yellowoven],
	applyMatrix: false,
	visible: false,
});

var oven2 = new Group({
	children: [redoven1.clone(), yellowoven.clone()],
	applyMatrix: false,
	visible: false,
});

oven.position = [850, 250];
oven2.position = [310, 250];

//오븐의 안이 입체적으로 보일 수 있게 사용.
var Line00 = new Path.Line({
	from: [120, 376],
	to: [240, 170],
	strokeColor: '#999999',
	strokeWidth: 2,
});
var Line01 = new Path.Line({
	from: [240, 170],
	to: [390, 170],
	strokeColor: '#999999',
	strokeWidth: 2,
});
var Line02 = new Path.Line({
	from: [240, 170],
	to: [240, 125],
	strokeColor: '#999999',
	strokeWidth: 2,
});

var Line = new Group({
	children: [Line00, Line01, Line02],
	applyMatrix: false,
	visible: false,
});
Line2 = Line.clone();
Line2.position = [796, 250];
Line2.visible = false;

//장면 1의 쿠키판
var cookiesheet1 = new Path.Rectangle({
	point: [40, 80],
	size: [450, 250],
	fillColor: new Color('#a6a6a6'),
	strokeColor: new Color('#8c8c8c'),
	strokeWidth: 20,
	visible: true,
});
var cookiesheet1_2 = new Path.Rectangle({
	point: [40, 400],
	size: [450, 250],
	fillColor: new Color('#a6a6a6'),
	strokeColor: new Color('#8c8c8c'),
	strokeWidth: 20,
	visible: true,
});

//장면 2의 쿠키판을 만들기 위한 조각
var triangle1 = new Path.RegularPolygon({
	center: [150, 340],
	sides: 3,
	radius: 180,
	fillColor: new Color('#a6a6a6'),
	strokeColor: new Color('#8c8c8c'),
	strokeWidth: 20,
});

var triangle2 = new Path.RegularPolygon({
	center: [334.6, 323.5],
	sides: 3,
	radius: 180,
	fillColor: new Color('#a6a6a6'),
	strokeColor: new Color('#8c8c8c'),
	strokeWidth: 20,
	rotation: 180,
});

//장면 2의 쿠키판
var cookiesheet2 = new Group({
	children: [triangle1, triangle2],
	applayMatrix: false,
});

cookiesheet2.position = [300, 540];
cookiesheet2.scaling = 0.6;

cookiesheet4 = cookiesheet2.clone();
cookiesheet4.strokeColor = new Color('#a6a6a6');
cookiesheet4.position = [300, 538];
cookiesheet4.scaling = 0.9;

//장면3의 쿠키판
var cookiesheet3 = new Path.Rectangle({
	point: [110, 70],
	size: [870, 630],
	fillColor: new Color('#a6a6a6'),
	strokeColor: new Color('#8c8c8c'),
	strokeWidth: 8,
	visible: false,
});

var cookiesheet2_1 = new Group({
	children: [cookiesheet2, cookiesheet4],
	applyMatrix: false,
	visible: false,
});

cookiesheet2_1.position = [190, 550];
cookiesheet2_2 = cookiesheet2_1.clone();
cookiesheet2_2.position = [700, 550];
cookiesheet2_2.visible = false;

var earLeft = new Path.Circle({
	center: [100, 80],
	radius: 30,
	fillColor: 'orange',
	strokeColor: 'black',
	strokeWidth: 5,
	applyMatrix: false,
});

var earRight = new Path.Circle({
	center: [200, 80],
	radius: 30,
	fillColor: 'orange',
	strokeColor: 'black',
	strokeWidth: 5,
	applyMatrix: false,
});

var face = new Path.Circle({
	center: [150, 150],
	radius: 90,
	fillColor: 'orange',
	strokeColor: 'black',
	strokeWidth: 5,
	applyMatrix: false,
});

var pupilLeft = new Path.Circle({
	center: [115, 140],
	radius: 6,
	fillColor: 'black',
});

var pupilRight = new Path.Circle({
	center: [180, 140],
	radius: 6,
	fillColor: 'black',
});

var eyebrowLeft = new Path.Rectangle({
	point: [90, 120],
	size: [36, 2],
	radius: [20, 20],
	strokeColor: 'black',
	strokeWidth: 5,
});

var eyebrowRight = new Path.Rectangle({
	point: [167, 120],
	size: [36, 2],
	radius: [20, 20],
	strokeColor: 'black',
	strokeWidth: 5,
});

var mouthLeft = new Path.Circle({
	center: [136, 170],
	radius: 13,
	fillColor: 'white',
	strokeColor: 'black',
	strokeWidth: 3,
});

var mouthRight = new Path.Circle({
	center: [159, 170],
	radius: 13,
	fillColor: 'white',
	strokeColor: 'black',
	strokeWidth: 3,
});

var mouthMiddle = new Path.Circle({
	center: [148, 170],
	radius: 5,
	fillColor: 'white',
});

var nose = new Path.Circle({
	center: [147, 160],
	radius: 7,
	fillColor: 'black',
});

var Lion = new Group({
	children: [earLeft, earRight, face, pupilLeft, pupilRight, eyebrowLeft, eyebrowRight, mouthLeft, mouthRight, mouthMiddle, nose],
	applyMatrix: false,
	visible: true,
});
Lion.children[0].fillColor = '#ffbf80';
Lion.children[1].fillColor = '#ffbf80';
Lion.children[2].fillColor = '#ffbf80';

var Lions = new Array();

for (var i = 0; i < 12; i = i + 1) {
	Lions.push(Lion.clone());
	Lions[i].scaling = 0.5;
	Lions[i].onMouseDrag = function (event) {
		this.position += event.delta;
	};
}
for (var i = 12; i < 500; i = i + 1) {
	Lions.push(Lion.clone());
	Lions[i].visible = false;
}

Lions[0].position = [620, 140];
Lions[1].position = [600, 220];
Lions[2].position = [900, 500];
Lions[3].position = [1020, 520];
Lions[4].position = [950, 150];
Lions[5].position = [1020, 250];
Lions[6].position = [640, 470];
Lions[7].position = [710, 550];
Lions[8].position = [710, 200];
Lions[9].position = [620, 550];
Lions[10].position = [920, 240];
Lions[11].position = [960, 600];

Lion.remove();

//장면 2의 쿠키판+라이언
var cookiesheet4 = new Group({
	children: [cookiesheet2_1, Lions[0], Lions[1], Lions[2], Lions[3], Lions[4], Lions[5]],
	applyMatrix: false,
});
var cookiesheet5 = new Group({
	children: [cookiesheet2_2, Lions[6], Lions[7], Lions[8], Lions[9], Lions[10], Lions[11]],
	applyMatrix: false,
});

//ovenbutton을 누르면 나타남
var ovendoor1 = new Path.Rectangle({
	point: [660, 125],
	size: [270, 250],
	fillColor: '#a4a4c1',
	visible: false,
});
var ovendoor2 = new Path.Rectangle({
	point: [120.1, 125],
	size: [270, 250],
	fillColor: '#a4a4c1',
	visible: false,
});

ovendoor2.fillColor.alpha = 0.6;
ovendoor1.fillColor.alpha = 0.6;

//쿠키판이 오븐에 들어가는 것처럼 구현하기 위해 사용
//쿠키판이 오븐에 일부분이 가려질 수 있음
var hide1 = new Path.Rectangle({
	point: [931, 125],
	size: [130, 250],
	//strokeColor : '#c2c2d6',
	fillColor: '#a4a4c1',
	visible: false,
});
var hide2 = new Path.Rectangle({
	point: [390, 125],
	size: [130, 250],
	//strokeColor : '#c2c2d6',
	fillColor: '#a4a4c1',
	visible: false,
});

var ovenbutton = new Path.Circle({
	center: [1015, 170],
	radius: 40,
	fillColor: '#eee6ff',
	//strokeColor:'black',
	strokeWidth: 3,
	visible: false,
});

var ovenbutton2 = new Path.Circle({
	center: [475, 170],
	radius: 40,
	fillColor: '#eee6ff',
	//strokeColor:'black',
	strokeWidth: 3,
	visible: false,
});

//장면 3의 색깔 입히기 도구
var pencil = new Path.Circle({
	center: (50, 50),
	radius: 25,
	fillColor: '#d17a7a',
	visible: false,
});

pencil.position = [50, 110];

var pencil2 = pencil.clone();
pencil2.position = new Point(50, 170);
pencil2.fillColor = '#d27f56';

var pencil3 = pencil.clone();
pencil3.position = new Point(50, 230);
pencil3.fillColor = '#9e6b51';

var pencil4 = pencil.clone();
pencil4.position = new Point(50, 290);
pencil4.fillColor = '#644735';

var pencil5 = pencil.clone();
pencil5.position = new Point(50, 350);
pencil5.fillColor = '#644735';

var pencil6 = pencil.clone();
pencil6.position = new Point(50, 410);
pencil6.fillColor = '#644735';

var pencil7 = pencil.clone();
pencil7.position = new Point(50, 470);
pencil7.fillColor = '#644735';

pencil.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil.fillColor;
		}
	}
};

pencil2.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil2.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil2.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil2.fillColor;
		}
	}
};

pencil3.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil3.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil3.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil3.fillColor;
		}
	}
};

pencil4.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil4.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil4.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil4.fillColor;
		}
	}
};

pencil5.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil5.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil5.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil5.fillColor;
		}
	}
};
pencil6.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil6.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil6.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil6.fillColor;
		}
	}
};
pencil7.onClick = function (event) {
	for (var j = 0; j < 6; j = j + 1) {
		for (var i = 12; i < 20; i = i + 1) {
			Lions[8 * j + i].children[0].fillColor = pencil7.fillColor;
			Lions[8 * j + i].children[1].fillColor = pencil7.fillColor;
			Lions[8 * j + i].children[2].fillColor = pencil7.fillColor;
		}
	}
};

next.onClick = function () {
	if (status == 0) {
		status = 1;
	} else if (status == 1) {
		status = 2;
	} else if (status == 2) {
		status = 3;
	} else if (status == 3) {
		status = 4;
	}
	if (status == 1) {
		basket.visible = true;
		basket2.visible = true;
		basket3.visible = true;
		basket4.visible = true;
		cookiesheet1.visible = true;
		cookiesheet1_2.visible = true;
		oven.visible = false;
		oven2.visible = false;
		Line.visible = false;
		Line2.visible = false;
		cookiesheet2.visible = false;
		cookiesheet2_1.visible = false;
		cookiesheet2_2.visible = false;
		hide1.visible = false;
		hide2.visible = false;
		ovenbutton.visible = false;
		ovenbutton2.visible = false;
		cookiesheet3.visible = false;
		for (var i = 0; i < 12; i = i + 1) {
			Lions.push(Lion.clone());
			Lions[i].visible = true;
			Lions[i].scaling = 0.5;
			Lions[i].rotation = 0;
			Lions[i].onMouseDrag = function (event) {
				this.position += event.delta;
			};
		}
		Lions[0].position = [620, 140];
		Lions[1].position = [600, 220];
		Lions[2].position = [900, 500];
		Lions[3].position = [1020, 520];
		Lions[4].position = [950, 150];
		Lions[5].position = [1020, 250];
		Lions[6].position = [640, 470];
		Lions[7].position = [710, 550];
		Lions[8].position = [710, 200];
		Lions[9].position = [620, 550];
		Lions[10].position = [920, 240];
		Lions[11].position = [960, 600];
		pencil.visible = false;
		pencil2.visible = false;
		pencil3.visible = false;
		pencil4.visible = false;
		pencil5.visible = false;
		pencil6.visible = false;
		pencil7.visible = false;
		cookiesheet4.onMouseDrag = function (event) {
			this.position = this.position;
		};
		cookiesheet5.onMouseDrag = function (event) {
			this.position = this.position;
		};
	}

	if (status == 2) {
		basket.visible = false;
		basket2.visible = false;
		basket3.visible = false;
		basket4.visible = false;
		cookiesheet1.visible = false;
		cookiesheet1_2.visible = false;
		oven.visible = true;
		oven2.visible = true;
		Line.visible = true;
		Line2.visible = true;
		cookiesheet2.visible = true;
		cookiesheet2_1.visible = true;
		cookiesheet2_2.visible = true;
		hide1.visible = true;
		hide2.visible = true;
		ovenbutton.visible = true;
		ovenbutton2.visible = true;
		cookiesheet3.visible = false;
		for (var i = 0; i < 12; i = i + 1) {
			Lions[i].rotation = 9;
			Lions[i].scaling = 0.3;
		}
		Lions[0].position = [155, 505];
		Lions[1].position = [215, 508];
		Lions[2].position = [275, 510];
		Lions[3].position = [110, 580];
		Lions[4].position = [170, 585];
		Lions[5].position = [230, 588];
		Lions[6].position = [665, 505];
		Lions[7].position = [725, 508];
		Lions[8].position = [785, 510];
		Lions[9].position = [620, 580];
		Lions[10].position = [680, 585];
		Lions[11].position = [740, 588];
		cookiesheet4.onMouseDrag = function (event) {
			this.position += event.delta;
		};
		cookiesheet5.onMouseDrag = function (event) {
			this.position += event.delta;
		};
		pencil.visible = false;
		pencil2.visible = false;
		pencil3.visible = false;
		pencil4.visible = false;
		pencil5.visible = false;
		pencil6.visible = false;
		pencil7.visible = false;
	}

	if (status == 3) {
		basket.visible = false;
		basket2.visible = false;
		basket3.visible = false;
		basket4.visible = false;
		cookiesheet1.visible = false;
		cookiesheet1_2.visible = false;
		oven.visible = false;
		oven2.visible = false;
		Line.visible = false;
		Line2.visible = false;
		cookiesheet2.visible = false;
		cookiesheet2_1.visible = false;
		cookiesheet2_2.visible = false;
		hide1.visible = false;
		hide2.visible = false;
		ovenbutton.visible = false;
		ovenbutton2.visible = false;
		cookiesheet3.visible = true;
		pencil.visible = true;
		pencil2.visible = true;
		pencil3.visible = true;
		pencil4.visible = true;
		pencil5.visible = true;
		pencil6.visible = true;
		pencil7.visible = true;

		cookiesheet4.onMouseDrag = function (event) {
			this.position = this.position;
		};
		cookiesheet5.onMouseDrag = function (event) {
			this.position = this.position;
		};
		for (var i = 0; i < 12; i = i + 1) {
			Lions[i].visible = false;
		}
		for (var i = 12; i < 60; i = i + 1) {
			Lions[i].visible = true;
		}

		for (var j = 0; j < 6; j = j + 1) {
			for (var i = 12; i < 20; i = i + 1) {
				Lions[8 * j + i].rotation = 0;
				Lions[8 * j + i].scaling = 0.3;
				Lions[8 * j + i].position = new Point(160 + 110 * (i - 12), 110 * (j + 1));
				Lions[8 * j + i].children[0].fillColor = new Color('#caad9b');
				Lions[8 * j + i].children[1].fillColor = new Color('#caad9b');
				Lions[8 * j + i].children[2].fillColor = new Color('#caad9b');
			}
		}
	}
	if (status == 4) {
		next.visible = false;
		nextText.visible = false;
		cookiesheet3.visible = false;
		pencil.visible = false;
		pencil2.visible = false;
		pencil3.visible = false;
		pencil4.visible = false;
		pencil5.visible = false;
		pencil6.visible = false;
		pencil7.visible = false;
		background.bounds.size = view.size;

		background.fillColor = {
			gradient: {
				stops: ['#d17a7a', '#d27f56', '#9e6b51', '#644735'],
				radial: true,
			},
			origin: view.center,
			destination: view.size.width,
		};
		for (var j = 0; j < 10; j = j + 1) {
			for (
				var i = 12;
				i < 22;
				i = i + 1 // 초기값; 비교기준; 변화분)
			) {
				Lions[10 * j + i].visible = true;
				Lions[10 * j + i].scaling = 0.3;
				Lions[10 * j + i].position = new Point(((i - 12 + 0.5) * view.size.width) / 10, ((j + 0.5) * view.size.height) / 10);
			}
		}
	}
};

ovenbutton.onClick = function (event) {
	ovendoor1.visible = true;
	ovenCook();
	function ovenCook() {
		setTimeout(function () {
			console.log('ovenCook1');
			for (var i = 6; i < 12; i = i + 1) {
				Lions[i].visible = true;
				Lions[i].children[0].fillColor = '#caad9b';
				Lions[i].children[1].fillColor = '#caad9b';
				Lions[i].children[2].fillColor = '#caad9b';
				Lions[i].children[3].fillColor = 'black';
				Lions[i].children[4].fillColor = 'black';
				Lions[i].children[5].fillColor = 'black';
				Lions[i].children[5].strokeColor = 'black';
				Lions[i].children[6].fillColor = 'black';
				Lions[i].children[6].strokeColor = 'black';
				Lions[i].children[7].fillColor = 'white';
				Lions[i].children[8].fillColor = 'white';
				Lions[i].children[9].fillColor = 'white';
				Lions[i].children[10].fillColor = 'black';
			}
			ovendoor1.visible = false;
		}, 3000);
	}
};

ovenbutton2.onClick = function (event) {
	ovendoor2.visible = true;
	ovenCook();
	function ovenCook() {
		setTimeout(function () {
			console.log('ovenCook2');
			cookiesheet2.fillColor = new Color('#a6a6a6');
			for (var i = 0; i < 6; i = i + 1) {
				Lions[i].visible = true;
				Lions[i].children[0].fillColor = '#caad9b';
				Lions[i].children[1].fillColor = '#caad9b';
				Lions[i].children[2].fillColor = '#caad9b';
				Lions[i].children[3].fillColor = 'black';
				Lions[i].children[4].fillColor = 'black';
				Lions[i].children[5].fillColor = 'black';
				Lions[i].children[5].strokeColor = 'black';
				Lions[i].children[6].fillColor = 'black';
				Lions[i].children[6].strokeColor = 'black';
				Lions[i].children[7].fillColor = 'white';
				Lions[i].children[8].fillColor = 'white';
				Lions[i].children[9].fillColor = 'white';
				Lions[i].children[10].fillColor = 'black';
			}
			ovendoor2.visible = false;
		}, 3000);
	}
};

function onResize() {
	background.bounds.size = view.size;
	cookiesheet3.size = [870, 630];
	if (status == 4) {
		for (var j = 0; j < 10; j = j + 1) {
			for (var i = 12; i < 22; i++) {
				Lions[10 * j + i].children[2].fillColor = new Color(Math.random(), Math.random(), Math.random(), (10 * j + i - 12) / 100);
				Lions[10 * j + i].children[2].scaling = 2 * Math.random();
				Lions[10 * j + i].position = new Point(((i - 12 + 0.5) * view.size.width) / 10, ((j + 0.5) * view.size.height) / 10);
			}
		}
	}
}

function onFrame(event) {
	if (status == 3) {
		if (event.count % 30 == 0) {
			pencil5.fillColor = new Color(Math.random(), 0, Math.random()) + '#9e6b51';
			pencil6.fillColor = new Color(Math.random(), Math.random(), 0) + '#9e6b51';
			pencil7.fillColor = new Color(0, Math.random(), Math.random()) + '#9e6b51';
		}
	}
	if (status == 4) {
		if (event.count % 10 == 0) {
			for (var j = 0; j < 10; j = j + 1) {
				for (var i = 12; i < 22; i++) {
					Lions[10 * j + i].children[0].fillColor = new Color(
						Math.random(),
						Math.random(),
						Math.random(),
						(10 * j + i - 12) / 100
					);
					Lions[10 * j + i].children[1].fillColor = new Color(
						Math.random(),
						Math.random(),
						Math.random(),
						(10 * j + i - 12) / 100
					);
					Lions[10 * j + i].children[2].fillColor = new Color(
						Math.random(),
						Math.random(),
						Math.random(),
						(10 * j + i - 12) / 100
					);
				}
			}
		}
	}
}
