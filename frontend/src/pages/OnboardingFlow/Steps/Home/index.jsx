import paths from "@/utils/paths";
import LGroupImg from "./l_group.png";
import RGroupImg from "./r_group.png";
import LGroupImgLight from "./l_group-light.png";
import RGroupImgLight from "./r_group-light.png";
import IANLogo from "@/media/logo/IAn-logo-dark.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

const IMG_SRCSET = {
  light: {
    l: LGroupImgLight,
    r: RGroupImgLight,
  },
  default: {
    l: LGroupImg,
    r: RGroupImg,
  },
};

export default function OnboardingHome() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const srcSet = IMG_SRCSET?.[theme] || IMG_SRCSET.default;

  return (
    <>
      <div className="relative w-screen h-screen flex overflow-hidden bg-theme-bg-primary">
        <div
          className="hidden md:block fixed bottom-10 left-10 w-[320px] h-[320px] bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${srcSet.l})` }}
        ></div>

        <div
          className="hidden md:block fixed top-10 right-10 w-[320px] h-[320px] bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${srcSet.r})` }}
        ></div>

        <div className="flex flex-col items-center justify-center max-w-md mx-auto py-12 px-4 space-y-8">
          <p className="text-theme-text-primary font-thin text-2xl text-center">
            {t("onboarding.home.title")}
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src={IANLogo || "/placeholder.svg"}
              alt="IAN"
              className="h-[50px] max-w-[300px] light:invert"
            />
            <p className="text-theme-text-primary font-thin text-4xl">IA-N</p>
          </div>

          <button
            onClick={() => navigate(paths.onboarding.llmPreference())}
            className="w-full md:max-w-[350px] py-3 rounded-md
                  border-2 border-theme-text-primary
                  bg-theme-button-primary hover:bg-theme-bg-secondary
                  text-theme-text-primary font-semibold text-sm
                  transition-colors duration-200 light:animate-none"
          >
            {t("onboarding.home.getStarted")}
          </button>
        </div>
      </div>
    </>
  );
}
