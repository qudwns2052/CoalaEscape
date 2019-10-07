room = game.createRoom("room", "room1.png") // 방 생성
room2 = game.createRoom("room2","배경-6.png") // 방 생성

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

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	if(game.getHandItem() == room.ban)
	{
		printMessage("반수환의 학번 앞자리 4개는? (Ctrl + 휠 확대로 e-id 확인)") // 클릭했을 때 출력
		showKeypad("number", "2015" , function(){
			room.door.unlock() // door의 잠금을 연다
			printMessage("잠금장치가 열리는 소리가 들렸다.") // 비밀번호를 풀었을 때 출력
		})
	}
	else
	{
		printMessage("증명사진이 필요할 것 같다.");
	}
}


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