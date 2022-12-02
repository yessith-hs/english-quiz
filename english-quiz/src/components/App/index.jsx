import { Card } from '../Card'
import { questions } from '../../const/questions'
import './App.css'
import wakeup from '../../assets/wakeup.svg'
import breakfast from '../../assets/breakfast.svg'
import generaldayli from '../../assets/general-dayli.svg'
import dayli from '../../assets/dayli.svg'
import work from '../../assets/work.svg'
import lunch from '../../assets/lunch.svg'
import work2 from '../../assets/work2.svg'
import study from '../../assets/study.svg'

export function App() {
  return (
    <main className='wrapper'>
      <section className='listQuestions'>
        {questions.map(question => (
          <Card key={question.id} question={question} />
        ))}
        <article className='routine'>
          <div className='routineBox'>
            <p>what’s your morning routine? say the time you do it.</p>
            <div className='routineGrid'>
              <figure>
                <img src={wakeup} alt='wakeup' />
              </figure>
              <figure>
                <img src={breakfast} alt='breakfast' />
              </figure>
              <figure>
                <img src={generaldayli} alt='general-dayli' />
              </figure>
              <figure>
                <img src={dayli} alt='dayli' />
              </figure>
              <figure>
                <img src={work} alt='work' />
              </figure>
              <figure>
                <img src={lunch} alt='lunch' />
              </figure>
              <figure>
                <img src={work2} alt='work2' />
              </figure>
              <figure>
                <img src={study} alt='study' />
              </figure>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
