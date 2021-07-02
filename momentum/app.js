const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) { // 첫번째 인자는 항상 이벤트 객체 정보를 받아온다
    event.preventDefault(); // 브라우저의 기본 동작을 막아준다.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
