import React, {useState, useEffect} from 'react'
const fetchCurrentTime = (): string => {
  return new Date().toLocaleString();
};

export default function TimePage(){
  const [currentTime , setCurrentTime] = useState('')
 useEffect(() => {
setCurrentTime(fetchCurrentTime())
 }, [])
  return (
    <div>
    <p> "The current time is: "    {currentTime}
</p>
   
    </div>
    )
}