import { gql, useQuery } from "@apollo/client"
import { Route, Routes } from "react-router-dom"
import { Evento } from "./pages/Evento"
import { Subscribe } from "./pages/Subscribe";

const GET_LESSONS_QUERRY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Leasson {
  id: string;
  title: string;
}

export function Router() {
  const { data } = useQuery<{ lessons: Leasson[] }>(GET_LESSONS_QUERRY)

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Evento />} />
      <Route path="/event/lesson/:slug" element={<Evento />} />
    </Routes>
  )
}