# 1. Framework Overview

## 1-0. Library vs. Framework

- `pages` 폴더 안에 `index.js`를 넣고 그 안에 함수를 export 하면 `/` 경로로 접속했을 때 나오는 문구를 출력할 수 있다.
- `/about` 경로로 갔을 때 문구를 출력하려면 `pages` 폴더 안에 `about.js`를 만들면 된다.

## 1-1. Pages
- `js`파일의 이름이 주소 경로가 되므로 중요하다. 그러나 파일 안의 함수 이름은 중요하지 않다.
    - 단, `index.js`는 예외이다. `/index`가 아닌, `/` 경로의 화면을 출력한다.
    - `jsx`를 쓴다면 `React.js`를 import할 필요가 없음 -- `js`파일에서 가능
- 반드시 함수는 `export default`를 해야 한다. 그렇지 않으면 에러가 난다.
