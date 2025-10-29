import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";
import AboutWindow from "./AboutWindow"; 

const GeneralContext = React.createContext({  
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
      {props.children}   

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}  
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID}/>}
      {isAnalyticsWindowOpen && <AnalyticsWindow uid={selectedStockUID} />}
      {isAboutWindowOpen && <AboutWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;