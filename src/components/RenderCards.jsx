import { TaskCard } from './index.js'

const RenderCards = ({ data = [], title, setTasks }) => {
  if (data.length > 0) {
    return data.map((task) => (
      <TaskCard key={task._id} tasks={data} setTasks={setTasks} {...task} />
    ))
  }

  return <h2 className="text-light text-center">{title}</h2>
}

export default RenderCards
