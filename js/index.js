const user = JSON.parse(localStorage.getItem('user')) || {
  id: 456,
  name: 'Charles Babbage',
  img: 'img/456.jpg'
};


const domBtnOthers = document.getElementById(`btnOthers`);
const domLayout = document.querySelector(`.layout`);

domBtnOthers.addEventListener('click', event => {
  domLayout.classList.toggle('open');
});



// messages.forEach( msg => {
//   document.getElementById('messages').innerHTML += `
//     <article class="message from-me">
//       <blockquote class="talk">Hello world!</blockquote>
//       <footer class="meta">Person Name <time timedate="2020-01-06">2 min ago</time></footer>
//     </article>`;
// });

const getMsgAsHtml = (msg) => {

  // let from = `from-them`;
  // if (msg.from.id === user.id ) {
  //   from = `from-me`;
  // }

  return `<article class="message ${ (msg.from.id === user.id ) ? `from-me` : `from-them` }">
    <blockquote class="talk">${msg.text}</blockquote>
    <footer class="meta">${msg.user.name} <time timedate="2020-01-06">2 min ago</time></footer>
  </article>`
}

document.getElementById('messages').innerHTML = messages.map(getMsgAsHtml).join('\n');
