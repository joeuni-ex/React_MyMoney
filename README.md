# React + Vite

## FireBase(DB)를 활용한 MyMoney 관리 APP

- 소비 기록을 작성하고 관리하는 앱
- 회원만 사용 가능 (회원가입 및 로그인 필요)

### 회원가입 화면

- email 형식에 맞게 작성하지 않으면 오류 발생하며
- password는 firebase의 자체적인 유효성 검사로 인하여 6자 이상 작성해야한다.
- ![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/39dbab9b-b7be-470d-8740-009debc24cf1)


### 로그인 화면

![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/20493363-a095-428c-a2e6-20272e5edac8)



## 로그아웃 기능

![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/3c2593b4-2ee7-4263-a88f-da5752d3b341)
- 로그인 된 유저만 출력되는 버튼 
- 네브바의 로그아웃 버튼을 클릭하면 로그아웃 처리된다.

### 거래 추가 기능

- 소비한 내용과 가격 그리고 추가적인 메모를 기재하여 DB에 저장가능
 ![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/63977492-8dbe-4778-9198-efb90366286c)


### 거래내역

- 거래가 추가 될 때마다 자동으로 거래내역에 업데이트 된다.
- ![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/8662c9ba-3d8b-40bf-9aae-0a53ca9d32e6)

- 거래내역의 타이틀을 클릭하면 상세보기가 가능하다(메모)
- ![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/602f6240-0b29-4e89-9e66-b58f29bc03f4)



#### 정렬 기능

-![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/7b7275a9-0114-4db5-8088-c192886566ee)

- 원하는 정렬 기준으로 거래내역을 확인 할 수 있다.

1.  정렬 기준 (최신순, 비용순, 가나다순)

-![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/988a91ae-c34d-41b6-88e2-97f02ffbeb69)


2.  정렬 기준 (오름차순, 내림차순)

![image](https://github.com/joeuni-ex/React_MyMoney/assets/141595215/e61e2f35-2b61-46ee-be3b-b8eb983f8d88)



#### 반응형 CSS 추가로 모바일에서도 확인 가능하다. 



### 배포주소

-https://react-my-money-app-joeuni.netlify.app
