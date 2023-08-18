import { DropDownProps } from "./DropDown.types";
import styles from "./DropDown.module.css";

/**
 * @param options Массив опций для вывода подсказок.
 * @param loading Загрузка опций.
 * @param renderOption Компонент опции в выпадающем списке.
 * @param onClick Обработчик клика.
 */

function DropDown<T extends Record<string, any>>({
  options,
  loading,
  renderOption,
  onClick,
}: DropDownProps<T>) {
  return (
    <div className={styles.dropDown}>
      {!loading ? (
        options.map((option, index) =>
          renderOption ? (
            renderOption(option, () => onClick("option"))
          ) : (
            <div
              key={index}
              className={styles.option}
              onClick={() => onClick("option")}
            >
              {Object.values(option).map((optionValue) => optionValue + " ")}
            </div>
          )
        )
      ) : (
        <div className={styles.loading}>Загрузка...</div>
      )}
    </div>
  );
}

export default DropDown;