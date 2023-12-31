import { ButtonControlProps, ControlButtons } from "./ButtonControl.types";
import TextField from "../TextField";
import Button from "../Button/Button";
import styles from "./ButtonControl.module.css";

/**
 @param leftButtons Принимает массив объектов типа { text: string; onClick: ()=> void } для отображени кнопок слева.
 @param rightButtons Принимает массив объектов типа { text: string; onClick: ()=> void } для отображени кнопок справа.
 */

const ButtonControl: React.FC<ButtonControlProps> = ({
  leftButtons,
  rightButtons,
  ...props
}) => {
  const getButtons = (buttons: ControlButtons[]) => {
    return buttons.map((props, index) => (
      <Button key={index} {...props}>
        {props.text}
      </Button>
    ));
  };

  return (
    <div className={styles.control}>
      {getButtons(leftButtons ?? [])}
      <TextField {...props} />
      {getButtons(rightButtons ?? [])}
    </div>
  );
};

export default ButtonControl;
