import BatterylessIntro from "../../common/BatterylessIntro";
import { BatterylessIntroStyles } from "../../styles/common/BatterylessIntroStyles";

function BatterylessIntroWrapper({ title, label, description, links, link_or_video }) {
  const data = { title, label, description, links, link_or_video };
  const spriteConfig = {
    spriteImage: "/turnkey-sprite.png",
    preloadImages: ["/turnkey-sprite.png"]
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