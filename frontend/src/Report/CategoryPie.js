import React, {useState, useEffect} from 'react'
import Datetime from 'react-datetime'
import DateFnsUtils from '@date-io/date-fns'
import {useDispatch} from 'react-redux'
import {averageCategories} from './../actions/reportActions'
import {VictoryPie, VictoryTheme, VictoryLabel} from 'victory'

const CategoryPie = () => {

  const date = new Date(), y = date.getFullYear(), m = date.getMonth()

  const [firstDay, setFirstDay] = useState(new Date(y, m, 1))
  const [lastDay, setLastDay] = useState(new Date(y, m + 1, 0))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(averageCategories({firstDay, lastDay}))
  }, [dispatch, firstDay, lastDay])

  return (
    <div>Category Pie</div>
  )
}

export default CategoryPie