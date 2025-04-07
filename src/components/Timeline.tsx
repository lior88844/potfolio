import { FC, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from '../styles/Timeline.module.scss'

interface TimelineItem {
  title: string
  description: string
  icon: IconType
}

interface TimelineData {
  [year: string]: TimelineItem[]
}

interface TimelineProps {
  data: TimelineData
}

const Timeline: FC<TimelineProps> = ({ data }) => {
  const years = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b))
  const containerRef = useRef<HTMLDivElement>(null)
  const autoScrollEnabled = useRef(true)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const scrollSpeed = 1 // Pixels per frame

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollAmount = 300
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })

    autoScrollEnabled.current = false
    setTimeout(() => {
      autoScrollEnabled.current = true
    }, 1000)
  }, [])

  const checkAndResetScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const timelineWidth = container.scrollWidth / 2
    const viewportCenter = container.clientWidth / 2
    const currentScroll = container.scrollLeft

    // If we've scrolled past the center point of the second set
    if (currentScroll >= timelineWidth) {
      // Reset to the first set without animation
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = currentScroll - timelineWidth
      container.style.scrollBehavior = 'smooth'
    }
    // If we've scrolled backwards past the start of the first set
    else if (currentScroll <= 0) {
      // Jump to the second set without animation
      container.style.scrollBehavior = 'auto'
      container.scrollLeft = timelineWidth
      container.style.scrollBehavior = 'smooth'
    }
  }, [])

  const startAutoScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    let lastTimestamp = 0
    const animate = (timestamp: number) => {
      if (!container || !autoScrollEnabled.current || isDragging.current) {
        requestAnimationFrame(animate)
        return
      }

      if (timestamp - lastTimestamp >= 16) {
        container.scrollLeft += scrollSpeed
        checkAndResetScroll()
        lastTimestamp = timestamp
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [checkAndResetScroll])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.style.scrollBehavior = 'smooth'

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      autoScrollEnabled.current = false
      startX.current = e.pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
    }

    const handleMouseUp = () => {
      isDragging.current = false
      setTimeout(() => {
        if (!isDragging.current) {
          autoScrollEnabled.current = true
          startAutoScroll()
        }
      }, 1000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX.current) * 2
      container.scrollLeft = scrollLeft.current - walk
      checkAndResetScroll()
    }

    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      autoScrollEnabled.current = false
      startX.current = e.touches[0].pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX.current) * 2
      container.scrollLeft = scrollLeft.current - walk
      checkAndResetScroll()
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      autoScrollEnabled.current = false
      container.scrollLeft += e.deltaY
      checkAndResetScroll()

      clearTimeout(container.dataset.wheelTimeout as unknown as number)
      container.dataset.wheelTimeout = setTimeout(() => {
        autoScrollEnabled.current = true
        startAutoScroll()
      }, 1000) as unknown as string
    }

    startAutoScroll()

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseUp)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleMouseUp)
    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseUp)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleMouseUp)
      container.removeEventListener('wheel', handleWheel)
    }
  }, [startAutoScroll, checkAndResetScroll])

  const renderTimelineItems = () => {
    return years.map((year, yearIndex) => (
      <motion.div
        key={year}
        className={styles.timelineYear}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: yearIndex * 0.1 }}
      >
        <div className={styles.yearLabel}>{year}</div>
        <div className={styles.timelineItems}>
          {data[year].map((item, itemIndex) => (
            <motion.div
              key={`${year}-${itemIndex}`}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: yearIndex * 0.1 + itemIndex * 0.05 }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.iconContainer}>
                  <item.icon />
                </div>
                <div className={styles.textContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))
  }

  return (
    <div className={styles.pageContainer}>
      <button 
        className={`${styles.navigationArrow} ${styles.left}`}
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>
      <button 
        className={`${styles.navigationArrow} ${styles.right}`}
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>
      <motion.div
        ref={containerRef}
        className={styles.timelineContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderTimelineItems()}
        {renderTimelineItems()} {/* Duplicate timeline items for infinite scroll */}
      </motion.div>
    </div>
  )
}

export default Timeline 