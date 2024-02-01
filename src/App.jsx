import { useState }  from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [feedComments, setFeedComments] = useState([])
  let storedComments = JSON.parse(localStorage.getItem("feed")) || []

  const addComment = (ev) => {
    ev.preventDefault()
    const id = Math.floor(Math.random() * 10000)
    const date = new Date()
    const newComment = {email, comment, id, date}
    setEmail('')
    setComment('')
    
    setFeedComments( (state) => {
      const newCommentArray = [...state, newComment]
      localStorage.setItem('feed', JSON.stringify(newCommentArray))
      return newCommentArray
    })
  }

  return (
    <form>
      <h3>Seção de Comentários</h3>
      <label htmlFor="email">Email</label>
      <input 
        type="text"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)} 
      />
      <label htmlFor="comment">Comentário</label>
      <input 
        type="text"
        value={comment}
        onChange={(ev) => setComment(ev.target.value)}
      />
      <button type="submit" onClick={addComment}>Enviar comentário</button>
      <hr />
      <div>
        {
          storedComments.length > 0 ? (
          storedComments.map( (comment) => (
            <div key={comment.id}>
              <p>{comment.email}</p>
              <p>{comment.date}</p>
              <p>{comment.comment}</p>
            </div>
          
        ))) : (<p>Seja o primeiro a comentar!</p>)
      
      }
      </div>
    </form>
  )
}

export default App
