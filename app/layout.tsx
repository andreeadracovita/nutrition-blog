import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./ui/Nav";
import Footer from "./components/Footer";

import "./styles/globals.css";

interface Props {
	readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<StoreProvider>
			<html lang="en">
				<body>
					<section className="flex flex-col min-h-screen">
						<Nav />

						<main className="grow">{children}</main>

						<Footer />
					</section>
				</body>
			</html>
		</StoreProvider>
	);
}
