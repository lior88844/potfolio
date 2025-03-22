import { FC } from 'react'
import Timeline from '../components/Timeline'
import { timelineData } from '../data/timeline'

const TimelinePage: FC = () => {
  return <Timeline data={timelineData} />
}

export default TimelinePage 