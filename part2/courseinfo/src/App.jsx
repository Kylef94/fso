const Header = ({name}) => <h1>{name}</h1>

const Part = ({part, ...props}) => { 
  console.log("props for Part", part, props)
  return <li>{part.name} {part.exercises}</li>
}

const Content = ({parts}) => {
  console.log(parts)
 return (<ul>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </ul>)
}

const Total = ({course}) => {
  let exercises = course.parts.map(part => part.exercises)
  let total = exercises.reduce((acc, val) => acc + val)
  return <p>Number of exercises {total}</p>
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total  course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App