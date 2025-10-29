import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";
import AboutWindow from "./AboutWindow"; 

const GeneralContext = React.createContext({  //React has createContext as a built-in API function   jo ki 2 function share kar raha hai Yahaan hum 2 functions share kar rahe hain(openBuyWindow(uid) → Buy window kholta hai.closeBuyWindow() → Buy window band karta hai.)
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

  openSellWindow: (uid) => {},
  closeSellWindow: () => {},

  openAnalyticsWindow: (uid) => {}, 
  closeAnalyticsWindow: () => {},

  openAboutWindow: (uid) => {},     
  closeAboutWindow: () => {},
});

export const GeneralContextProvider = (props) => { 
  const [selectedStockUID, setSelectedStockUID] = useState("");    
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isAnalyticsWindowOpen, setIsAnalyticsWindowOpen] = useState(false);
  const [isAboutWindowOpen, setIsAboutWindowOpen] = useState(false);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenAnalyticsWindow = (uid) => {
    setIsAnalyticsWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenAboutWindow = (uid) => {   
    setIsAboutWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseAboutWindow = () => {    
    setIsAboutWindowOpen(false);
    setSelectedStockUID("");
  };

  {/*GeneralContext.Provider ke through hum ye functions sab child components ko share kar rahe hain. value={{ }} ke through */}
  return (
    <GeneralContext.Provider    
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow,
        openAboutWindow: handleOpenAboutWindow,    
        closeAboutWindow: handleCloseAboutWindow,
      }}
    >
      {props.children}   {/*{props.children} ka matlab — jo bhi component is provider ke andar likha gaya hai, wo display hoga jab bhi GeneralContext.Provider use krenge. */}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}   {/*Agar isBuyWindowOpen true hai to <BuyActionWindow />run karega. */}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID}/>}
      {isAnalyticsWindowOpen && <AnalyticsWindow uid={selectedStockUID} />}
      {isAboutWindowOpen && <AboutWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;