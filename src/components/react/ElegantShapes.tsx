import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

interface ShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: ShapeProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 0.6 } : { opacity: 0, y: -80, rotate: rotate - 10 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        animate={shouldReduce ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.1]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function ElegantShapesBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <ElegantShape
        delay={0.2}
        width={500}
        height={120}
        rotate={12}
        gradient="from-[#0d47a1]/[0.12]"
        className="left-[-8%] top-[15%]"
      />
      <ElegantShape
        delay={0.4}
        width={400}
        height={100}
        rotate={-15}
        gradient="from-[#FFB300]/[0.08]"
        className="right-[-5%] top-[55%]"
      />
      <ElegantShape
        delay={0.3}
        width={280}
        height={70}
        rotate={-8}
        gradient="from-[#0d47a1]/[0.08]"
        className="left-[8%] bottom-[10%]"
      />
      <ElegantShape
        delay={0.5}
        width={200}
        height={55}
        rotate={20}
        gradient="from-[#FFB300]/[0.06]"
        className="right-[20%] top-[8%]"
      />
    </div>
  );
}
