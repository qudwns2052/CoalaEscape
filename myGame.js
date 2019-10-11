room1 = game.createRoom("room1", "room1.png") // 방 생성
room2 = game.createRoom("room2", "room2.png")
room3 = game.createRoom("room3", "room3.png")

function MakeObject(room, name, picture, size, locate_x, locate_y) 
{
	object = room.createObject(name, picture)
	object.setWidth(size)
	room.locateObject(object, locate_x, locate_y)

	return object
}

// room1에 대한 코드 /////////////////////////////////////////////////////////
room1.chair1 = MakeObject(room1, "chair1", "chair1.png", 300, 800, 500)
room1.table1 = MakeObject(room1, "table1", "table1.png", 300, 1000, 600)
room1.keypad1 = MakeObject(room1, "keypad1", "keypad1.png", 120, 155, 510)
room1.orangejuice1 = MakeObject(room1, "orangejuice1", "orangejuice1.png", 70, 1050, 510)
room1.book1 = MakeObject(room1, "book1", "book.png", 60, 950, 550)
room1.box1 = MakeObject(room1, "box1", "box1-close.png", 200, 500, 600)
room1.straw1 = MakeObject(room1, "straw1", "straw1.png", 100, 500, 600)
room1.strong = MakeObject(room1, "strong", "strong.png", 100, 100, 650)
room1.num1 = MakeObject(room1, "num1", "0.png", 50, 180, 660)
room1.num2 = MakeObject(room1, "num2", "0.png", 50, 220, 660)
room1.drug1 = MakeObject(room1, "drug1", "drug1.png", 70, 700, 600)
room1.portal1 = MakeObject(room1, "portal1", "portal1.png", 300, 550, 350)
room1.tv1 = MakeObject(room1, "tv1", "tv1.png", 200, 550, 300)

var strong_cnt = 0

function ShowStrong(cnt, icon)
{
	var temp = cnt % 10

	var text1 = String(temp)
	var text2 = ".png"

	icon.setSprite(text1.concat(text2))
}

room1.straw1.hide()
room1.drug1.hide()
room1.portal1.hide()

room1.tv1.lock()

check1_1 = true
check1_2 = true

room1.tv1.onClick = function() {
	if(room1.tv1.isLocked())
	{	
		printMessage("소리를 켜 주세요 !")
		room1.tv1.unlock()
	}
	else
	{	
		if(check1_1)
		{	
			printMessage("질풍가도를 들린다! 힘이 1 증가했다!")
			playSound("tv1.wav")
			ShowStrong(++strong_cnt, room1.num2)
			check1_1 = false
		}
		else
		{
			printMessage("질풍가도가 들린다!")
			playSound("tv1.wav")
		}
	}
}

room1.portal1.onClick = function() {
	printMessage("어둠이 나를 집어 삼킨다. 힘이 약해진다 ...")
	game.move(room2)
}

room1.chair1.onClick = function() {
	if(room1.chair1.isLocked())
	{
		printMessage("너무 흔들어서 의자가 고장나 버렸다.")
	}
	else
	{
		printMessage("의자가 흔들리며 무엇인가가 떨어졌다.")
		room1.chair1.lock()
		room1.drug1.show()
	}
}

room1.drug1.onClick = function() {
	printMessage("알약 3개를 복용했다! 힘이 1 증가했다!")
	ShowStrong(++strong_cnt, room1.num2)
	room1.drug1.hide()
}

room1.straw1.onClick = function(){
	printMessage("빨대를 주웠다. 무언가를 마셔보자.")
	room1.straw1.pick()
}

room1.orangejuice1.onClick = function() { 
	if(game.getHandItem() == room1.straw1) 
	{
		if(strong_cnt > 1)
		{
			showImageViewer("orangejuice1-empty.png","")
			printMessage("오렌지 주스를 원샷했다! 힘이 1 증가했다!")
			if(check1_2)
				ShowStrong(++strong_cnt, room1.num2)
			check1_2 = false
		}
		else
		{
			printMessage("힘이 2 이상이어야 마실 수 있다.")
		}
	}
	else
	{
		showImageViewer("orangejuice1.png","")
		printMessage("오렌지 주스다. 빨대가 있으면 마실 수 있을 것 같다.")
	}
}

room1.book1.onClick = function(){
	showImageViewer("paper.png", "hint1.txt"); 
}

room1.box1.onClick = function() {
	if(strong_cnt > 1) 
	{	
		room1.box1.setSprite("box1-open.png")
		room1.straw1.show()
	}
	else
	{
		printMessage("힘이 2 이상이어야 열 수 있다.")
	}
}

room1.keypad1.onClick = function() {
	
	if(strong_cnt < 3)
		printMessage("힘이 3 이상이어야 킬 수 있다.")
	else
	{
			printMessage("오렌지 주스 컵의 힌트를 이용하자.")
			showKeypad("number", "2052" , function(){
			room1.portal1.show()
			printMessage("수상한 포탈이 열렸다.")
			room1.tv1.hide()
		 })
	}
}
////////////////////////////////////////////////////////////////


room2.board2 = MakeObject(room2, "board2", "board2.png", 300, 1000, 300)
room2.bucket2 = MakeObject(room2, "bucket2", "bucket2.png", 120, 800, 600)
room2.shelf2 = MakeObject(room2, "shelf2", "shelf2.png", 300, 600, 500)
room2.chocolate2 = MakeObject(room2, "chocolate2", "chocolate2.png", 100, 280, 650)
room2.octagonal2 = MakeObject(room2, "octagonal2", "octagonal2.png", 100, 480, 440)
room2.chalk2 = MakeObject(room2, "chalk2", "chalk2.png", 70, 1000, 620)
room2.portal2 = MakeObject(room2, "portal2", "portal2.png", 400, 250, 400)
room2.chair2 = MakeObject(room2, "chair2", "chair2-1.png", 150, 1200, 600)
room2.strong = MakeObject(room2, "strong", "strong.png", 100, 100, 650)
room2.num1 = MakeObject(room2, "num1", "0.png", 50, 180, 660)
room2.num2 = MakeObject(room2, "num2", "0.png", 50, 220, 660)
room2.book2 = MakeObject(room2, "book2", "book.png", 60, 500, 630)

room2.book2.onClick = function(){
	showImageViewer("paper.png", "hint2.txt"); 
}

room2.chalk2.hide()
room2.portal2.hide()

room2.chair2.onClick = function() {

	if(strong_cnt < 5)
	{
		printMessage("힘이 5 이상이어야 의자를 세울 수 있다.")
	}
	else if(room2.chair2.isLocked())
	{
		//None
	}
	else
	{
		printMessage("의자를 일으켜세웠다.")
		room2.chair2.moveX(-50)
		room2.chair2.moveY(-50)
		room2.chair2.setSprite("chair2.png")
		room2.chair2.lock()
	}
	
}


room2.portal2.onClick = function() {
	printMessage("칠판과 관련하여 프로그래밍과 연관을 지어보자!")
	showKeypad("alphabet", "HELLO" , function(){
		printMessage("어둠이 나를 집어 삼킨다. 힘이 약해진다 ...")
		game.move(room3)
	 })
}



room2.chalk2.onClick = function() {
	printMessage("분필을 얻었다! 힘이 1 증가했다!!!")
	ShowStrong(++strong_cnt, room2.num2)
	room2.chalk2.pick()
}

room2.board2.onClick = function() {
	if(game.getHandItem() == room2.chalk2)
	{
		if(room2.chair2.isLocked())
		{
			printMessage("스슥스슥. 포탈이 열렸다!")
			room2.board2.setSprite("board2-1.png")
			room2.portal2.show()
		}
		else
		{
			printMessage("칠판이 높아서 의자를 세워야 닿을 것 같다.")
		}
	}
}
room2.chocolate2.onClick = function() {
	printMessage("초콜릿 2개를 먹었다! 예전의 힘이 돌아오면서 힘이 증가했다!!!")
	ShowStrong(++strong_cnt, room2.num2)
	room2.chocolate2.hide()
}

room2.octagonal2.onClick = function() {
	if(strong_cnt < 4)
		printMessage("힘이 4 이상이어야 밀 수 있다.")
	else if(room2.octagonal2.getX() > 700)
		{
			printMessage("우당탕탕")
			room2.octagonal2.hide()
			room2.chalk2.show()
			room2.bucket2.setSprite("bucket2-1.png")
		}
	else
		room2.octagonal2.moveX(40)
}


//////////////////////////////////////////////////////////////

room3.setRoomLight(0.2)

room3.lamp3 = MakeObject(room3, "lamp3", "lamp3.png", 100, 500, 100)
room3.fake3 = MakeObject(room3, "fake3", "fake3.png", 300, 200, 400)
room3.portal3 = MakeObject(room3, "portal3", "portal1.png", 280, 200, 230)
room3.portal3.hide()
room3.portalgun3 = MakeObject(room3, "portalgun3", "portal-gun3.png", 200, 300, 600)
room3.battery3 = MakeObject(room3, "battery3", "battery3.png", 50, 1100, 650)
room3.pepperoni3 = MakeObject(room3, "pepperoni3", "pepperoni3.png", 100, 900, 600)
room3.frame3 = MakeObject(room3, "frame3", "frame3.png", 300, 900, 300)
room3.book3 = MakeObject(room3, "book3", "book.png", 60, 500, 630)

room3.book3.onClick = function(){
	showImageViewer("paper.png", "hint3.txt"); 
}

room3.portalgun = room3.createObject("portalgun", "portal-gun3-1.png")
room3.portalgun.hide()

game.makeCombination(room3.battery3, room3.portalgun3, room3.portalgun)

temp = 80
room3.square3_1 = new Square(room3, "square3_1", "square3.png", 80, 820, 220, 1)
room3.square3_2 = new Square(room3, "square3_2", "square3.png", 80, 820+temp, 220, 2)
room3.square3_3 = new Square(room3, "square3_3", "square3.png", 80, 820+(temp*2), 220, 3)
room3.square3_4 = new Square(room3, "square3_4", "square3.png", 80, 820, 220+temp, 4)
room3.square3_5 = new Square(room3, "square3_5", "square3.png", 80, 820+temp, 220+temp, 5)
room3.square3_6 = new Square(room3, "square3_6", "square3.png", 80, 820+(temp*2), 220+temp, 6)
room3.square3_7 = new Square(room3, "square3_7", "square3.png", 80, 820, 220+(temp*2), 7)
room3.square3_8 = new Square(room3, "square3_8", "square3.png", 80, 820+temp, 220+(temp*2), 8)
room3.square3_9 = new Square(room3, "square3_9", "square3.png", 80, 820+(temp*2), 220+(temp*2), 9)
room3.reset3 = MakeObject(room3, "reset3", "reset3.png", 60, 1020, 480)

var check3 = new Array()

for(i=0; i<9; i++)
{
	check3[i] = false
}

function Square(room, name, picture, size, locate_x, locate_y, num)
{
	this.num = num
	this.obj = MakeObject(room, name, picture, size, locate_x, locate_y)
}

Square.prototype.onClick = function()
{
	this.obj.hide()
	check3[this.num-1] = true
	check_picture()
}
Square.prototype.Show = function()
{
	this.obj.show()
	check3[this.num-1] = false
}

check3_sub = true

function check_picture() 
{
	if(check3[0] && check3[1] && check3[2] && check3[5] && check3[8] && check3_sub
		 && !check3[3] && !check3[4] && !check3[6] && !check3[7])
	{
		printMessage("ㄱ자를 깨달음으로써 힘이 2 증가했다!!!")
		strong_cnt += 2
		ShowStrong(strong_cnt, room3.num2)
		check3_sub = false
	}
}

room3.portal3.lock()

room3.portal3.onClick = function() {
	if(room3.portal3.isLocked())
	{
		printMessage("숫자 10을 2진수로 표현하면? (6자리)")
		showKeypad("telephone", "001010" , function(){
			printMessage("포탈로 들어갈 준비가 되었다.")
			room3.portal3.unlock()
		})
	}
	else
	{
		game.clear()
	}

}

room3.fake3.onClick = function() {
	printMessage("포탈건을 여기에 쏴보자.")
	if(game.getHandItem() == room3.portalgun)	
	{
		printMessage("포탈이 열렸다.")
		room3.portal3.show()
	}
}

room3.reset3.onClick = function() {
	room3.square3_1.Show()
	room3.square3_2.Show()
	room3.square3_3.Show()
	room3.square3_4.Show()
	room3.square3_5.Show()
	room3.square3_6.Show()
	room3.square3_7.Show()
	room3.square3_8.Show()
	room3.square3_9.Show()
}

room3.strong = MakeObject(room3, "strong", "strong.png", 100, 100, 650)
room3.num1 = MakeObject(room3, "num1", "0.png", 50, 180, 660)
room3.num2 = MakeObject(room3, "num2", "0.png", 50, 220, 660)

roomLight = false

room3.lamp3.onClick = function() {
	if(roomLight == false) 
	{
		room3.setRoomLight(1)
		roomLight = true
	}
	else
	{
		room3.setRoomLight(0.2)
		roomLight = false
	}
}


room3.pepperoni3.onClick = function() {
	printMessage("페퍼로니 4개를 먹었다! 예전의 힘이 돌아오면서 힘이 증가했다!!!")
	ShowStrong(++strong_cnt, room3.num2)
	room3.pepperoni3.hide()
}

room3.battery3.onClick = function() {
	if(strong_cnt < 6)
		printMessage("힘이 6이상이어야 건전지를 주울 수 있다.")
	else
	{
		printMessage("포탈건에 넣을 수 있는 건전지이다. 힘이 1 증가했다!!!")
		ShowStrong(++strong_cnt, room3.num2)
		room3.battery3.pick()
	}
}
room3.portalgun3.onClick = function() {
	if(strong_cnt < 9)
		printMessage("포탈 건이다. 힘이 9이상이어야 들 수 있다.")
	else
	{
		printMessage("포탈 건을 획득했다. 건전지를 넣어보자.")
		room3.portalgun3.pick()
	}
}

game.start(room1)
printMessage("힘을 키워 방을 탈출하자!")


// room.keypad.onClick = function() {
// 	if(game.getHandItem() == room.ban)
// 	{
// 		printMessage("반수환의 학번 앞자리 4개는? (Ctrl + 휠 확대로 e-id 확인)") // 클릭했을 때 출력
// 		showKeypad("number", "2015" , function(){
// 			room.door.unlock() // door의 잠금을 연다
// 			printMessage("잠금장치가 열리는 소리가 들렸다.") // 비밀번호를 풀었을 때 출력
// 		})
// 	}
// 	else
// 	{
// 		printMessage("증명사진이 필요할 것 같다.");
// 	}
// }


/*
room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치

room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2)
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다.") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book1 = room.createObject("book1", "책2-1.png")
room.book1.setWidth(80)
room.locateObject(room.book1, 100, 140)
room.book1.onClick = function() {
	showImageViewer("종이.png", "room1_책1.txt"); // 이미지 출력
}

room.can = room.createObject("can", "할수있다.jpg")
room.can.setWidth(200)
room.locateObject(room.can, 200, 600)

room.can.onClick = function(){
	printMessage("할 수 있다. 왠지 모를 힘이 난다.")
	room.can.pick()
}

room.ban = room.createObject("ban", "반수환-1.jpg")
room.ban.setWidth(50)
room.locateObject(room.ban, 250, 110)

room.ban.onClick = function(){
	printMessage("반수환(증명사진)을 주웠다!")
	room.ban.pick()
}
room.book2 = room.createObject("book2", "책3-1.png")
room.book2.setWidth(80)
room.locateObject(room.book2, 250, 110)
room.book2.onClick = function() {
	showImageViewer("종이.png", "room1_책2.txt"); // 이미지 출력
}

room.book2.move = true // 플래그 변수
room.book2.onDrag = function(direction){
	if(direction == "Right" && room.book2.move){ // 오른쪽으로 드래그 했으면
		if(game.getHandItem() == room.can){
			printMessage("책을 밀어버렸다!")
			room.book2.moveX(75) // X 방향으로 200 이동
			room.book2.moveY(-10) // Y 방향으로 -40 이동
			room.book2.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
		}
		else
		{
			printMessage("힘이 필요하다.")
		}
	}
	else {
		printMessage("밀리지 않는다.")
	}
}


room.book3 = room.createObject("book3", "책2-1.png")
room.book3.setWidth(80)
room.locateObject(room.book3, 400, 90)
room.book3.onClick = function() {
	showImageViewer("종이.png", "room1_책3.txt"); // 이미지 출력
}

room.eid = room.createObject("eid", "e-id.png") // 오브젝트 생성
room.eid.setWidth(70) // 크기 조절
room.locateObject(room.eid, 930, 200) // 위치 변경


//----------------------------------------------------------------------------

room2.cupboard = room2.createObject("cupboard", "찬장-2-닫힘.png") // 찬장 생성
room2.key = room2.createObject("key", "열쇠.png") // 열쇠 생성

//크기 조절
room2.cupboard.setWidth(250)
room2.key.setWidth(45)

//배치
room2.locateObject(room2.cupboard, 800, 323)
room2.locateObject(room2.key, 745, 315)

room2.key.hide() 

room2.cupboard.onClick = function() { // 클릭했을 때
	if(room2.cupboard.isOpened()) { // Opened 상태인 경우
		room2.cupboard.close() // close
	} else if(room2.cupboard.isClosed()) { // Closed 상태인 경우
		room2.cupboard.open() // open
	} else { 
		// do nothing
	}
}

room2.key.onClick = function(){
	printMessage("가짜 키인 것 같다... 리모콘을 사용해보자.")
}

room2.cupboard.onOpen = function() {
	room2.cupboard.setSprite("찬장-2-열림.png") // 열린 그림으로 변경
	room2.key.show() // key 보이기
}

room2.cupboard.onClose = function() {
	room2.cupboard.setSprite("찬장-2-닫힘.png") // 닫힌 그림으로 변경
	room2.key.hide() // key 숨기기
}

room2.door2 = room2.createObject("door2", "문3-좌-닫힘.png")
room2.door2.setWidth(136)
room2.locateObject(room2.door2, 170, 335)

room2.closet = room2.createObject("closet", "옷장-1-닫힘.png")
room2.closet.setWidth(300)
room2.locateObject(room2.closet, 250, 305)



room2.cau = room2.createObject("cau", "청룡.jpg")
room2.cau.setWidth(200)
room2.locateObject(room2.cau, 520, 200)
room2.cau.hide()

room2.cau.onClick = function(){
	printMessage("샤워중인 청룡이를 발견했다!")
	room2.cau.pick()
}

room2.closet.move = true // 플래그 변수
room2.closet.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room2.closet.move){ // 오른쪽으로 드래그 했으면
		if(game.getHandItem() == room2.cau){	
			printMessage("옷장을 밀어버렸다!")
			room2.closet.moveX(200) // X 방향으로 200 이동
			room2.closet.moveY(-40) // Y 방향으로 -40 이동
			room2.closet.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
		}
		else
		{
			printMessage("청룡의 힘이 필요하다...")
		}
		} else {
		printMessage("열리지 않는다.")
	}
}


roomLight = true // 플래그 변수

room2.remote = room2.createObject("remote", "리모컨.png")
room2.remote.setWidth(70)
room2.locateObject(room2.remote, 800, 550)

room2.remote.onClick = function() {
	if(roomLight) {
		room2.setRoomLight(0.2)
		roomLight = false
		room2.cau.show()
	} else {
		room2.setRoomLight(1)
		roomLight = true
		room2.cau.hide()
	}
}


room2.door2.onClick = function() { // door2를 클릭했을 때
	if(room2.door2.isClosed()){ // door2가 closed 상태이면
		room2.door2.open() // door2의 상태를 open으로 바꿈
	} else if (room2.door2.isOpened()){ // door2가 opened 상태이면
		game.clear() // 게임 클리어
	} else {
		// do nothing
	}
}


room2.right = room2.createObject("right", "화살표-오른쪽.png")
room2.right.setWidth(100)
room2.locateObject(room2.right, 310, 550)

room2.cau2 = room2.createObject("cau2", "cau.png")
room2.cau2.setWidth(300)
room2.locateObject(room2.cau2, 1100, 350)

room2.cau2.onClick = function(){
	printMessage("청룡의 힘이 필요하다...")
}

room2.door2.onOpen = function() {
	room2.door2.setSprite("문3-좌-열림.png")
}

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력

*/