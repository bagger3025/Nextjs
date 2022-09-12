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
    
## 1-3. Routing
- `a` 태그의 `href` 태그를 이용하면 이동할 때 전체 애플리케이션이 다시 로드됨
    - 매우 느려짐
    - `Link`를 이용해 클라이언트 측 네비게이션을 할 수 있음
    - `Link`는 `href`를 위한 것일 뿐, `color`나 `className` 같은 것들은 `a` 태그에 넣음
- `useRouter` hook을 사용해 위치에 따른 작업을 할 수 있음

## 1-4. CSS Modules
- `.module.css` 파일의 이름은 상관없지만 끝의 `.module.css`는 중요함
- `.module.css` 파일을 import 해서 className으로 넣으면 style을 입힐 수 있음
- className은 공백으로 구분하여 문자열로 넣어주면 됨
    - 백틱을 이용하여 문자열로 만들기
    - 배열로 만들어 join 메서드를 이용하기