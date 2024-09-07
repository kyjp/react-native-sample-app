import React from 'react'
import TabsComponent from '../atoms/TabsComponent'
import CircleList from '../atoms/CircleList'
import SearchForm from '../atoms/SearchForm'
import FloorList from '../atoms/FloorList'
import Slide from '../atoms/Slide'

const SearchLayout = () => {
  return (
    <div>
        <TabsComponent/>
        <SearchForm />
        <CircleList />
        <FloorList/>
        <Slide />
    </div>
  )
}

export default SearchLayout