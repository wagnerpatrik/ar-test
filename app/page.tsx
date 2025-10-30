"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";

const AstroModel = dynamic(() => import("./components/Astronaut"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <AstroModel />
    </main>
  );
}
