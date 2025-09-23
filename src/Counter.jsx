import {useState} from 'react';
function Counter() {

    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <h1>This is Counter Component</h1>
      Counter : {count}
      <button onClick={handleCounter}>Counter</button>
      {
        count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :count==3?<h1>Condition 3</h1>
        :count==4?<h1>Condition 4</h1>
        :<h1>Other Condition</h1>
      }
    </div>
  )
}
export default Counter;