# POSTBOARD WEB PAGE DEVELOPE 

> begin 2020-03-21 ~ 2020 - 04 -12 (기능적인 부분은 마무리되서 임시 마무리)

> 추후에 댓글기능 덧글기능 추가 보안성 

* 2020-03-23 - 기본적은 틀 생성

* 2020-03-24 - 로그인 로그아웃 passport / 미들웨어를 사용하여 구현중 (Ajax)

* 2020-03-25 - 로그인 로그아웃 구현 완료, 디자인 구현중

* 2020-03-26 - 디자인 구현 완료, 회원가입 + 메인 페이지에 게시판 구현 준비중

* 2020-03-26(2) - 가입구현 완료

* 2020-04-02 - 게시판구현 완료(약간 미흡, 디자인 부족)

* 2020-04-03 - 게시판 디자인 구현중

* 2020-04-05 - mysql 함수 분리, read, update ejs 파일 따로 생성/ CRUD 기능 구현 완료/ 조회수 증가 기능포함

* 2020-04-05 - 마이페이지 구현 완료

* 2020-04-10 - 네이비게이션바 구현 완료 / 비밀번호 변경 기능 추가

# USE FRAMEWORK

* node EXPRESS

# USE PACKAGE
```json
{
    "dependencies": {
        "body-parser": "^1.19.0",
        "ejs": "^3.0.1",
        "express": "^4.17.1",
        "mysql": "^2.18.1",
        "path": "^0.12.7"
    },
    "devDependencies": {
        "connect-flash": "^0.1.1",
        "express-session": "^1.17.0",
        "passport": "^0.4.1",
        "passport-local": "^1.0.0"
    }
}
```
# USE LANGUAGE

* javascript (ejs, js)

* html



# USE DATABASE
```
db_name : postboardUser
db_table(Userinfo) : info
```

# WEB DESIGN

* nav bar
![image](https://user-images.githubusercontent.com/50985723/79060896-3bafcd00-7cc5-11ea-8646-b68701c63150.png)



* (/login)

![image](https://user-images.githubusercontent.com/50985723/77752831-a9c08700-706b-11ea-9fbe-ca0079e72f2f.png)

* (/join)

![image](https://user-images.githubusercontent.com/50985723/77752865-b8a73980-706b-11ea-822d-f668f6aec450.png)

* (/board/page/1) - 디자인 미구현
![image](https://user-images.githubusercontent.com/50985723/79060914-61d56d00-7cc5-11ea-9040-f02d53d54c3e.png)


* (/myhome) - 디자인 미구현
![image](https://user-images.githubusercontent.com/50985723/79060924-7ca7e180-7cc5-11ea-80c9-b7d37fc9bf67.png)


* (/board/update)
* (/myhome/update)
에서 post 형식으로 수정을 한다.


# 보완사항
1. 댓글기능/글쓰기툴 기능 추가
3. 로그인 회원가입을 제외한 main page, 마이 페이지, 게시판 디자인 수정

