import './App.css'

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


function App() {

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

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




  return (
    <>
      {/* <MyButton /> */}
      {/* <MyApp /> */}
      {/* <AboutPage /> */}
      {/* <Profile /> */}
      {content}
      
    </>
  )
}

export default App
