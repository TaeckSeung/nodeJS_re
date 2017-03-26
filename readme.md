#NodeJS 세미나
- Nonblocking, I/O Thread(File, DB) waiting Defend
- 용도 : Cpu의존이 낮고, connection을 동시 처리해야 하는 경우
- File Up/Down 에 좋음
- Javascript 언어 특성 결합(생산성)/ MultiThread 처리를 Callback으로 대체

프로젝트 만들기
1. npm init으로 생성
2. package.json에 응용할 모듈 dependencies 설정
 - express: mvc패턴을 응용할 수 있는 모듈
 - ejs:뷰 템플릿 모델
 - socket.io:웹소켓 통신
 - *은 최신 릴리즈 버전을 의미하므로 특정버전은 버전입력
3. npm install로 해당 패키지 json을 참고한 모듈 인스톨


서버세팅
1. server.js 에서 Express를 이용하여 세팅
2. routes/index.js로 접속하는 도메인에 따른 경로 변경(Django URL과 유사)
    index.js에 뷰 템플릿에서 사용할 변수 설정
3. 해당 내용은 views내  ejs파일에서 해당변수를 이용하여 사용
    layout을 설정하여 include하면 설정부분 뷰에 계속 담을 필요없다


웹소켓
