import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./ui/Nav";
import Footer from "./components/Footer";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
	readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<StoreProvider>
			<html lang="en">
				<body>
					<section className={styles.container}>
						<Nav />

						<main className={styles.main}>{children}</main>

						<Footer />
					</section>
				</body>
			</html>
		</StoreProvider>
	);
}
