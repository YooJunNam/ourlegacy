# Ourlegacy 쇼핑몰 클론 😉 

[Demo Page](https://sharp-davinci-fe6514.netlify.app)

[Demo Image] ![image](https://user-images.githubusercontent.com/81619737/127739043-f39de965-dc93-4d76-a424-21204240ea74.png)

Normal 
- React Router DOM을 이용해 SPA구조로 구현
- 중복되는 레이아웃들은 모듈화하여 재사용할 수 있도록 구현

로그인/회원가입
- ContextAPI를 이용해 유저정보/로그인 상태를 전역적으로 관리
- 세션.쿠키를 이용한 로그인 인증방식 구현
- LocalStorage를 이용해 유저 정보 저장. 주기적으로 ping을 보내 유저 로그인 상태 확인

상품 리스트뷰
- 카테고리별 상품 목록을 비동기 통신으로 받아와 서빙

상품 상세 뷰
- 많은 스틸컷들은 사용자가 직접 넘겨볼 수 있도록 캐러셀 라이브러리를 이용
- 상품 상세 정보를 서버에서 비동기로 받아와 데이터 서빙

검색
- 상품 검색 api를 이용해 상품 검색 기능 제공
- 모든 상품 이름을 대문자로 사용하고 있기 때문에 유저의 쿼리값을 내부적으로 대문자로 치환해 검색

장바구니
- 유저의 로그인 여부, 중복 아이템 추가 여부, 아이템별 사이즈 옵션 등을 벨리데이션 하여 동작 구현
- 장바구니 아이템을 최종적으로 주문까지 가능

반응형 디자인
- 스타일 시트내에서 미디어쿼리(@media)를 사용하여 조건을 적용
- 일반적인 Web width와 Mobile width의 layout을 설정하여 2가지 스크린으로 반응형 구현



