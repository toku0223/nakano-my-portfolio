import { Link } from "gatsby";
import React, { useState } from 'react';
import { ContactForm } from '../plugins/firebase';


const MyForm = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [context, setContext] = useState('')




  // データベースへの書き込み
  const createMessage = async () => {
    console.log('ready')
    const res = await ContactForm(userName, email, title, context)
    console.log(userName)
    console.log('complete', res)
  }

  const pressEnter = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      createMessage()
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="お名前を入力してください。"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="メールアドレスを入力してください。"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="題名を入力してください。"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="textarea"
        placeholder="メッセージを入力してください。"
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />
      <button onClick={createMessage}>
        送信
      </button>

      <Link to="/">ホームへ</Link>

    </>
  )
}

export default MyForm;