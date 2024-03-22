import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";
import StarsIcon from "@mui/icons-material/Stars";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFooter } from "../../../actions/Actions";
import paymentMethods from "../../../assets/images/payment-methods.svg";

const Footer = () => {
  const dispatch = useDispatch();
  const { footer } = useSelector((state) => state.getFooter);
  useEffect(() => {
    dispatch(getFooter);
  }, [dispatch, footer]);

  return (
    <>
      <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
        <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
          {footer?.map((footer, index) => (
            <div
              className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5"
              key={index}
            >
              <h2 className="text-primary-grey mb-2 uppercase">
                {footer.title}
              </h2>
              {footer.links?.map((item, Linkindex) => (
                <a
                  href={item.redirect}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  key={Linkindex}
                >
                  {item.Name}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
        <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
          <div className="w-full sm:w-1/2">
            <h2 className="text-primary-grey">Mail Us:</h2>
            <p className="mt-2 leading-5">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
          </div>

          <div className="w-full sm:w-1/2">
            <h2 className="text-primary-grey">Registered Office Address:</h2>
            <p className="mt-2 leading-5">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone:{" "}
              <a className="text-primary-blue" href="tel:18002029898">
                1800 202 9898
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
        <a
          href="https://seller.flipkart.com/sell-online"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-yellow-400">
            <WorkIcon sx={{ fontSize: "20px" }} />
          </span>{" "}
          Sell On Flipkart
        </a>
        <a
          href="https://brands.flipkart.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-yellow-400">
            <StarsIcon sx={{ fontSize: "20px" }} />
          </span>{" "}
          Advertise
        </a>
        <a
          href="https://www.flipkart.com/the-gift-card-store"
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="text-yellow-400">
            <CardGiftcardIcon sx={{ fontSize: "20px" }} />
          </span>{" "}
          Gift Cards
        </a>
        <a
          href="https://www.flipkart.com/helpcentre"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-yellow-400">
            <HelpIcon sx={{ fontSize: "20px" }} />
          </span>{" "}
          Help Center
        </a>

        <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
        <img draggable="false" src={paymentMethods} alt="Card Payment" />
      </div>
    </>
  );
};

export default Footer;
