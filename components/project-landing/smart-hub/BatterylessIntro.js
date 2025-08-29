import BatterylessIntro from "../../common/BatterylessIntro";
import { BatterylessIntroStyles } from "../../styles/common/BatterylessIntroStyles";

function BatterylessIntroWrapper({ data }) {
  const spriteConfig = {
    spriteImage: "/smart-hub-sprite.png",
    spritePlaceholder: "/smart-hub-sprite-placeholder.png", 
    preloadImages: ["/smart-hub-sprite-placeholder.png", "/smart-hub-sprite.png"]
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