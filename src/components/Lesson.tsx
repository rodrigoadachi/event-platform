import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
/*
import classNames from 'classnames'

<div
          className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
            'bg-green-500': isActiveLeasson,
          })}
        >
*/
interface LessonProps {
  title: string
  slug?: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvaliable = isPast(props.availableAt)
  const avaliableDateFormatted = format(props.availableAt,"EEEE ' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLeasson = slug === props.slug

  return (
    <div>

      <Link to={`/event/lesson/${props.slug}`} className='group'>
        <span className="text-gray-300">
          {avaliableDateFormatted}
        </span>

        
        <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLeasson ? 'bg-green-500':''}`}>

          <header className="flex items-center justify-between">
            
            {isLessonAvaliable ? (
              <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLeasson ? 'text-white':'text-blue-500'}`}>
                <CheckCircle size={20}/>
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20}/>
                Em breve
              </span>
            )}
            <span className={`text-xs rounded px-2 py[2px] text-white border font-bold ${isActiveLeasson ? 'border-white':'border-green-300'}`}>
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
          </header>

          <strong className={`mt-5 block ${isActiveLeasson ? 'text-white':'text-gray-200'}`} >
            {props.title}
          </strong>

        </div>
      </Link>

    </div>
  )
}