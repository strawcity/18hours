import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Button } from 'bloomer'
import NewsItem from './NewsItem'

const Slideshow = ({newsItems, currentNewsIndex, setCurrentNews}) => {
  return (
    <div>
      <SwipeableViews index={currentNewsIndex} onChangeIndex={setCurrentNews}>
        {newsItems.map((newsItem, index) => 
          <NewsItem newsItem={newsItem} key={index} />
        )}
      </SwipeableViews>
      <Button 
        className='App-button'
        isStatic={currentNewsIndex < 1 ? 'true' : ''}
        onClick={() => setCurrentNews(currentNewsIndex - 1)}
      >
        {'Föregående'}
      </Button>
      <Button 
        className='App-button'
        isStatic={
          currentNewsIndex >= newsItems.length - 1 ?
          'true' : ''}
        onClick={() => setCurrentNews(currentNewsIndex + 1)}
      >
        {'Nästa'}
      </Button>
    </div>
  )
}

export default Slideshow