
import { useState, useEffect } from 'react'
import { SERVICE_OPORTUNITIES_URL } from '../utils/Constants'

export const usePositionsListData = () => {
  const [postitionsData, setPositionsList] = useState({})
  const [loading, setLoading] = useState(false)

  const onReload = (event) => {
    GetUsers()
  }

  useEffect(function () {
    GetUsers()
  }, [])

  function GetUsers (offset = 300, size = 15, aggregate = 1) {
    setLoading(true)
    window
      .fetch(`${SERVICE_OPORTUNITIES_URL}?offset=${offset}&size=${size}&aggregate=${aggregate}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      })
      .then(res => res.json())
      .then(response => {
        console.log(response?.results)
        setPositionsList(response?.results)
        setLoading(false)
      })
  }

  return { postitionsData, loading, onReload }
}
