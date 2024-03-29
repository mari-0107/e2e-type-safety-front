import { useQuery} from 'urql'
import { GetUsersDocument } from './graphql/generated'
// import { User } from './types'
// import { Message } from './types'
import UserDisplay from './components/UserDisplay'
import { useEffect } from 'react'
// import MessageDisplay from './components/MessageDisplay'


function App() {
  const [results] = useQuery({
    query: GetUsersDocument
  })

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/zps9tswoyr8zp')
    .then((response) => response.json())
    .then((data) => console.log(data));
  }, [])

  return (
    <>
      <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-start p-4 gap-y-12 overflow-scroll">
      {
        results.data?.users.map((user, i) => <UserDisplay user={user} key={i}/>)
      }
</div>

<div>

</div>

    </>
  )
}

export default App
