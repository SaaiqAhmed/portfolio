import React, { useEffect, useState } from 'react';
import styles from '../styles.module.css';
import { motion, useMotionValue } from "framer-motion";

function Cursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX-16)
        cursorY.set(e.clientY-16)
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
        window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <motion.div
        className={styles.Cursor}
        style={{
            translateX: cursorX,
            translateY: cursorY,
        }}
        />
    );
}

export default Cursor;