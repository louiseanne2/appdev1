import './App.css'
import { useState } from 'react';


let IsLoggnedIn = false;
let content;
if (IsLoggnedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}


function AdminPanel() {
  return <h1>Welcome, Admin!</h1>;
}

function LoginForm() {
  return (
    <h1>Welcome to Login Form</h1>
  );
}




// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}


<img className="avatar" />

const user = {
  name: 'Louise',
  imageUrl: '/GradPic.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

const drinks = [
  {title : "Juice", isCold : true, id: 1},
  {title : "Coffee", isCold : false, id: 2},
  {title : "Tea", isCold : true, id: 3},
];

function ShoppingList() {
  const drinkItems = drinks.map(drink => 
    <li
      key={drink.id}
      style={{
        color: drink.isCold ? 'violet' : 'blue'
      }}>
      {drink.title}
    </li>
  );
  return (
    <ul>
      <h1>Drinks</h1>
      <ul>{drinkItems}</ul>
    </ul>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}