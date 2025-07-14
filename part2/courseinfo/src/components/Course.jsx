const Header = ({name}) => <h1>{name}</h1>

const Part = ({part, ...props}) => { 
  return <li>{part.name} {part.exercises}</li>
}

const Content = ({parts}) => {
 return (<ul>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </ul>)
}

const Total = ({parts}) => {
  let total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total  parts={course.parts}/>
    </div>
  )
}

export default Course;