import { useState } from 'react'
import { topics, type Topic } from './utils/topics'

function App() {
  return (
    <main className='grid place-items-center pt-16'>
      <ul className='flex flex-col gap-2 list-decimal'>
        {topics.map((topic) => (
          <Topic key={topic.name} topic={topic}/>
        ))}
      </ul>
    </main>
  )
}

const Topic = ({topic}: {topic: Topic}) => {
  const [isOpen, setIsOpen] = useState(false)
  const hadSubtopics = topic?.subtopics && topic.subtopics.length > 0

  const handleOnClick = () => {
    if(!hadSubtopics) return
    setIsOpen(!isOpen)
  }

  return (
    <li>
      <p onClick={handleOnClick} className={`p-1 mb-2 rounded-lg flex w-full justify-between ${hadSubtopics ? 'cursor-pointer' : ''} ${topic.enabled ? 'bg-green-300' : ''}`}>
        <span>{topic.name}</span> <span>{topic?.subtopics && topic.subtopics.length}</span>
      </p>
      {isOpen && topic.subtopics && (
        <ol className='flex flex-col gap-2 list-disc'>
          {topic?.subtopics && topic.subtopics.map((subtopic) => (
        <Topic key={subtopic.name} topic={subtopic} />
      ))}
        </ol>
      )}
    </li>
  )
}

export default App
