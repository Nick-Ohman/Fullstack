
const Part = (props) => {
  if (props.part1.part1) {
    return <p>{props.part1.part1.name}-{props.part1.part1.exercises}</p>
  } 
  
} 

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
      <p>hello</p>
      <p>hello
        
      </p>
    </div>
  )
}
const Content = (part1) => {
  
  return (
    <div>
     <p> {part1.part1.name}- {part1.part1.exercises}</p>
     <p>{part1.part2.name}- {part1.part2.exercises}</p>
     <p> {part1.part3.name}- {part1.part3.exercises}</p>
     <Part part1={part1} />
    
    </div>
  )
}

const Total = (part1) => {
  let value = part1.part1.exercises + part1.part2.exercises + part1.part3.exercises;
  return (
    <div>
      {value}
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
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App