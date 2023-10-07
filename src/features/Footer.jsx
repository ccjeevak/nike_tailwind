import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { FooterSection } from "../common/components";
import { FOOTER_LINKS } from "../common/constants";

const Footer = () => {
  return (
    <div className="max-container">
      <div className="flex gap-20 max-lg:flex-col">
        <div>
          <a>
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 text-white-400 sm:max-w-sm font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex gap-5 w-fit">
            <div className="p-2 bg-white rounded-full">
              <img src={facebook} width={24} height={24} />
            </div>
            <div className="p-2 bg-white  rounded-full">
              <img src={twitter} width={24} height={24} />
            </div>
            <div className="p-2 bg-white  rounded-full">
              <img src={instagram} width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 gap-20 lg:gap-10 flex-wrap justify-between">
          <FooterSection
            title={FOOTER_LINKS.products.title}
            items={FOOTER_LINKS.products.links}
          />
          <FooterSection
            title={FOOTER_LINKS.help.title}
            items={FOOTER_LINKS.help.links}
          />
          <FooterSection
            title={FOOTER_LINKS.getInTouch.title}
            items={FOOTER_LINKS.getInTouch.links}
          />
        </div>
      </div>
      <div className="flex mt-24 text-white-400 items-center font-montserrat max-sm:flex-col">
        <div className="flex flex-1 gap-2 items-center">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-full object-contain"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};
export default Footer;
