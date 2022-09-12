# 1. Framework Overview

## 1-0. Library vs. Framework

- `pages` 폴더 안에 `index.js`를 넣고 그 안에 함수를 export 하면 `/` 경로로 접속했을 때 나오는 문구를 출력할 수 있다.
- `/about` 경로로 갔을 때 문구를 출력하려면 `pages` 폴더 안에 `about.js`를 만들면 된다.

## 1-1. Pages
- `js`파일의 이름이 주소 경로가 되므로 중요하다. 그러나 파일 안의 함수 이름은 중요하지 않다.
    - 단, `index.js`는 예외이다. `/index`가 아닌, `/` 경로의 화면을 출력한다.
    - `jsx`를 쓴다면 `React.js`를 import할 필요가 없음 -- `js`파일에서 가능
- 반드시 함수는 `export default`를 해야 한다. 그렇지 않으면 에러가 난다.

## 1-2. Static Pre Rendering
- 앱에 있는 페이지들은 정적으로 렌더링됨
- `create-react-app`은 client-side rendering을 함
    - 이럴 경우 연결이 느리다면 javascript를 다 받아와서 UI가 렌더링 될 때까지 하얀 화면으로 보임
- Hidration
    - 정적 렌더링된 html 페이지를 react.js가 넘겨받아 react.js로 작동함