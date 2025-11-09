// export default function TodoList() {
//   return (
//     // This doesn't quite work!
//     <h1>Hedy Lamarr's Todos</h1>
//     <img 
//       src="https://i.imgur.com/yXOvdOSs.jpg" 
//       alt="Hedy Lamarr" 
//       class="photo"
//     >
//     <ul>
//       <li>Invent new traffic lights
//       <li>Rehearse a movie scene
//       <li>Improve the spectrum technology
//     </ul>
//   );
// }


export default function TodoList() {
  return (
    <div>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo" 
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
