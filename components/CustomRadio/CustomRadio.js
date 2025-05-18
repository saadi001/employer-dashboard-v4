import styles from "./CustomRadio.module.css";
const CustomRadio = ({ id, name, label, checked, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.radio} htmlFor={id}>
        <input
          id={id}
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="text-sm text-headerColor">{label}</span>
      </label>
    </div>
  );
};

export default CustomRadio;
