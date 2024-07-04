import styles from "./Flex.module.scss";

const Flex = ({ children }) => {
	return <div className={styles.flex}>{children}</div>;
};
export default Flex;
