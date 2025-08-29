import BatterylessIntro from "../../common/BatterylessIntro";
import { BatterylessIntroStyles } from "../../styles/common/BatterylessIntroStyles";

function BatterylessIntroWrapper({ data }) {
  const spriteConfig = {
    spriteImage: "/esl-sprite.png",
    spritePlaceholder: "/esl-sprite-placeholder.png",
    preloadImages: ["/esl-sprite-placeholder.png", "/esl-sprite.png"]
  };

  return (
    <BatterylessIntro 
      data={data} 
      spriteConfig={spriteConfig}
      StylesComponent={BatterylessIntroStyles}
    />
  );
}

export default BatterylessIntroWrapper;