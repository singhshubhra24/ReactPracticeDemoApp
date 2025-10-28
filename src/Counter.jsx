import {useState} from 'react';
function Counter() {

    const [counter, setCount] = useState(0);

    const handleCounter = () => {
        setCount(counter + 1);
    }
  return (
    <div>
      <h1>This is Counter Component</h1>
      Counter : {counter}
      <button onClick={handleCounter}>Counter</button>
      {
        counter ==0?<h1>Condition 0</h1>
        :counter ==1?<h1>Condition 1</h1>
        :counter ==2?<h1>Condition 2</h1>
        :counter ==3?<h1>Condition 3</h1>
        :counter ==4?<h1>Condition 4</h1>
        :<h1>Other Condition</h1>
      }
    </div>
  )
}
export default Counter;