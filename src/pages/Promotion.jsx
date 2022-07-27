import React from "react";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import BottomCard from "../components/PromotionsComp/BottomsCard/BottomCard";
import Daily from "../components/PromotionsComp/Daily/Daily";
import HotDeals from "../components/PromotionsComp/HotDeals/HotDeals";
import MidText from "../components/PromotionsComp/MidText/MidText";
import NoDownloads from "../components/PromotionsComp/NoDownloads/NoDownloads";
import Other from "../components/PromotionsComp/OtherPromotions/Other";
import PromHeader from "../components/PromotionsComp/PromHeader/PromHeader";
import RummyCode from "../components/PromotionsComp/RummyCode/RummyCode";
import TableComp from "../components/PromotionsComp/Table/TableComp";
import style from "./Promotion.module.scss";

const Promotion = () => {
  return (
    <div className={style.wrapper}>
      <NavBarComp bg="#0D1043" />
      <PromHeader />
      <HotDeals />
      <Other />
      <MidText />
      <TableComp />
      <RummyCode />
      <br />
      <br />
      <BottomCard />
      <NoDownloads />
      <Daily />
    </div>
  );
};

export default Promotion;
