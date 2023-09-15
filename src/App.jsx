
const Part = (props) => {
  if (props.part1) {
    return (<p>{props.part1}-{props.exercises1}</p>)
  } else if (props.part2) {
    return (<p>{props.part2}-{props.exercises2}</p>)
  } else { return (<p>{props.part3}-{props.exercises3}</p>)}
  
} 

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}
const Content = (part1) => {
  console.log()
  return (
    <div>
     <p> {part1.part1.name}- {part1.part1.exercises}</p>
     <p>{part1.part2.name}- {part1.part2.exercises}</p>
     <p> {part1.part3.name}- {part1.part3.exercises}</p>
     
    </div>
  )
}

const Total = ({part1, part2, part3}) => {
  
  return (
    <div>
      
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <Header course={course} />
     <Content part1={part1} part2={part2} part3={part3}/>
      <Total />
    </div>
  )
}

export default App