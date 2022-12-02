import './Card.css'
export function Card ({ question }) {
  return (
    <article className='card'>
      <div className='cardContainer'>
        <figure className='cardImg'>
          <img src={question.src} alt='img' />
        </figure>
        <p className='cardText'>{question.question}</p>
      </div>
    </article>
  )
}
