import styles from './Header.module.css'

const SelectComponent = ({ name, value, onChange, options }) => {
    return (
        <>
            <select
                name={name}
                className={`${styles[`${name}Select`]} ${styles.select}`}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    )
}

export default SelectComponent