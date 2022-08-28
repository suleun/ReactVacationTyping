# Typing & Study Game

타자연습과 언어공부를 같이 할 수 있는 서비스

구성 : 3가지 모드

## 1. Study Mode
![image](https://user-images.githubusercontent.com/56391441/187089835-76dd85ac-16a6-4e89-974d-1107f40f42ec.png)
공부할 언어를 보면서 뜻을 타이핑 하며 공부하는 모드
* 아래 목록 중 공부 하고 싶은 글을 누르면 누른 글 연습 가능
* 올바르게 입력 후 엔터를 누르면 다음 문장으로 넘어 감

## 2. Game Mode
![image](https://user-images.githubusercontent.com/56391441/187089872-52eee75a-a59e-4b66-a7a8-c3c20d96ad9f.png)
주어진 시간 안에 얼마나 많은 문장을 타이핑 할 수 있는지 게임식으로 연습 가능한 모드
* 공부할 언어를 보고 뜻을 올바르게 타이핑 하면 점수 획득
* 올바르게 입력 후 엔터를 누르면 다음 문장으로 넘어 감 

## 3. Upload Mode
![image](https://user-images.githubusercontent.com/56391441/187089913-6a3e4de6-7646-4a28-8c3e-bd10cc631644.png)
자신이 원하는 문장을 직접 입력하고 연습 가능 

## 실행 방법
```
npm start
```
http://localhost:3000

```
npm install -g json-server
```
json-server 설치

```
json-server --watch db.json --port 3001
```
백엔드 json-server 실행 
