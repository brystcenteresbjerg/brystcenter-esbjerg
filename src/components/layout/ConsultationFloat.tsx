"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

export default function ConsultationFloat() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
    >
      <Button href="/booking" variant="float" size="md">
        Book konsultation
      </Button>
    </motion.div>
  );
}
