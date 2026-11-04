import { useState } from 'react'
import Button from '../../../components/kit/Button.jsx'

const questions = [
  { item: 'The list of tasks', answer: 'State', why: 'It changes over time and cannot be computed from anything else.' },
  { item: 'The number of tasks', answer: 'Calculate', why: 'tasks.length. Storing it creates a second copy that can go wrong.' },
  { item: 'The title "Task Manager"', answer: 'Neither', why: 'It never changes. Just write it in the JSX.' },
  { item: 'The text being typed in the input', answer: 'State', why: 'It changes and nothing else can compute it. It lives in TaskInput.' },
  { item: 'The list of completed tasks', answer: 'Calculate', why: 'tasks.filter((t) => t.completed)' },
  { item: 'A task passed to TaskItem', answer: 'Prop', why: 'It comes from the parent. In TaskItem you read it, you do not copy it into state.' },
]

const choices = ['State', 'Prop', 'Calculate', 'Neither']

function QuizRow({ question }) {
  const [picked, setPicked] = useState(null)
  const isCorrect = picked === question.answer

  return (
    <li className="px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-slate-900">{question.item}</p>
        <div className="flex gap-1.5">
          {choices.map((choice) => (
            <Button key={choice} variant={picked === choice ? 'primary' : 'secondary'} onClick={() => setPicked(choice)}>
              {choice}
            </Button>
          ))}
        </div>
      </div>
      {picked && (
        <p className={`mt-1.5 text-xs ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
          {isCorrect ? `Yes. ${question.why}` : 'Not quite. Run the three questions again.'}
        </p>
      )}
    </li>
  )
}

export default function IsItStateQuiz() {
  return (
    <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
      {questions.map((q) => (
        <QuizRow key={q.item} question={q} />
      ))}
    </ul>
  )
}
