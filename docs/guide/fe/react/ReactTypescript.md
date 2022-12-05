# React + Typescript

## 说明
### 1. Props
不要使用[`React.FC`](https://github.com/facebook/create-react-app/pull/8177)
### 2. useState 能推断就不用加
### 3. children 手动加或者使用`PropsWithChildren`
### 4. props使用html属性，`extends HTMLAttributes`
### 5. React.ReactNode、 React.ReactElement 和 JSX.Element 
- React.ReactElement, 包含 type 和 props 的属性对象
- React.ReactNode, `ReactChild(ReactElement | ReactText) | ReactFragment | ReactPortal | boolean | null | undefined`
- JSX.Element `extends React.ReactElement<any, any>`

## 文章
- https://react-typescript-cheatsheet.netlify.app/docs/basic/setup
- https://github.com/piotrwitek/react-redux-typescript-guide