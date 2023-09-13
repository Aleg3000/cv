import { useRef, useMemo } from "react"

export const useSelector = () => {
    const ref = useRef()
    const q = useMemo(() => gsap.utils.selector(ref), [])
    return [q, ref]
  }

//   function App() {
//     const [q, ref] = useSelector()
  
//     useEffect(() => {
//       gsap.to(q(".square"), { x: 200 })
//     }, [])
  
//     return (
//       <div ref={ref}>
//         <div className="shape square">Square</div>
//       </div>
//     )
//   }