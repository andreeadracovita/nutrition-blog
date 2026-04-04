import styles from "../styles/layout.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h2>SiteName</h2>

			<p>123-456-7890</p>
			<p>info@mysite.com</p>
			<p>Sundlaugavegur 105,</p>
			<p>105 Reykjavík, Iceland</p>
		</footer>
	);
}