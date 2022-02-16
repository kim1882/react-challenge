import { useTranslation } from "react-i18next";
import { StyledPopup, ButtonSection, Button } from "./Popup.styled";

interface IPopupComponentProps {
  trigger: React.ReactElement;
  confirm: {
    label: string | React.ReactNode;
    action: () => void;
  };
  isWarning?: boolean;
}
const PopupComponent: React.FC<IPopupComponentProps> = ({
  trigger,
  confirm,
  children,
  isWarning = false,
}) => {
  const { t: translation } = useTranslation();
  const handleConfirm = (close) => {
    const { action } = confirm;
    if (action) action();
    close();
  };
  return (
    <StyledPopup trigger={trigger} modal nested>
      {(close) => (
        <>
          <div className="message">{children}</div>
          <ButtonSection>
            <Button className="close" onClick={() => close()}>
              {translation("popup.cancel")}
            </Button>
            <Button
              className={`confirm${isWarning ? " warning" : ""}`}
              onClick={() => handleConfirm(close)}
            >
              {confirm.label}
            </Button>
          </ButtonSection>
        </>
      )}
    </StyledPopup>
  );
};

export default PopupComponent;
