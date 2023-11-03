import style from "./SignIn.module.css"

function SignIn() {
  return (
    <div className={style.signInMain}>
      <form>
        <div>
          <h2>Авторизация</h2>
        </div>

        <div className={style.signInInside}>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Войти</button>
        </div>
      </form>
    </div>
  )
}
export default SignIn
