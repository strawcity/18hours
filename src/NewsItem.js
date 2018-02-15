import React from 'react'
import './NewsItem.css'
import {
  Button,
  Card, 
  CardHeader,
  CardHeaderTitle,
  CardContent,
  CardFooter,
  CardFooterItem,
  Content,
} from 'bloomer'

const NewsItem = ({newsItem}) => {
  return (
    <Card className='NewsItem-card'>
      <CardHeader>
        <CardHeaderTitle>
            {newsItem.title}
        </CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Content>
            {newsItem.content}
            <br />
            <br />
            {newsItem.creator ? 
            newsItem.creator + ' - ' + newsItem.date
            : newsItem.date
            }
        </Content>
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          <Button href={newsItem.link} isColor='dark' >
          Läs mer
          </Button>
        </CardFooterItem>
      </CardFooter>
    </Card>
  )
}

export default NewsItem