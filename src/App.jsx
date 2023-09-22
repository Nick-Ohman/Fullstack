
const Part = (props) => {

  
  return(
    <p> {props.props.part1.name}</p>
    
    
  )
  
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
const Content = (props) => {
  

  return (
    <div>
    <Part props={props}></Part>
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
      <Total part1={{name: 'Fundamentals of React', exercises: 10}} part2={{name: 'Using props to pass data', exercises: 7}} part3={{name: 'State of a component', exercises: 14}}/>
    </div>
  )
}

export default App