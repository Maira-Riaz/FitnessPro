"use client"
import { motion, MotionValue } from "framer-motion"

interface ProgressBarProps {
  progress: MotionValue<number>
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50"
      style={{ scaleX: progress }}
    />
  )
}

export default ProgressBar